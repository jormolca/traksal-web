import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
  // Check if directory exists, if not return empty array
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get id (slug)
      const slug = fileName.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        slug,
        ...(matterResult.data),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    slug,
    content: matterResult.content,
    ...(matterResult.data),
  };
}

export function getRelatedPosts(currentSlug, limit = 3) {
  const allPosts = getSortedPostsData();
  const currentPost = getPostData(currentSlug);
  
  if (!currentPost) return [];
  
  // Get keywords of current post
  const currentKeywords = currentPost.keywords 
    ? currentPost.keywords.split(',').map(k => k.trim().toLowerCase()) 
    : [];
  
  // Filter out the current post
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug);
  
  // Calculate a score based on matching keywords
  const scoredPosts = otherPosts.map(post => {
    const postKeywords = post.keywords 
      ? post.keywords.split(',').map(k => k.trim().toLowerCase()) 
      : [];
    
    let score = 0;
    postKeywords.forEach(kw => {
      // Check for partial matches or exact matches
      if (currentKeywords.some(currentKw => currentKw.includes(kw) || kw.includes(currentKw))) {
        score += 1;
      }
    });
    
    return { ...post, score };
  });
  
  // Sort by score (descending), then by date (newest first)
  scoredPosts.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score; // Higher score first
    }
    return a.date < b.date ? 1 : -1; // Newest first
  });
  
  // Return the top posts, removing the score property to match original format
  return scoredPosts.slice(0, limit).map(({ score, ...post }) => post);
}
