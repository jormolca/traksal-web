import { getPostData, getSortedPostsData, getRelatedPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Article.module.css';
import indexStyles from '../BlogIndex.module.css'; // Reuse card styles

// SEO Metadata generation
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const postData = getPostData(slug);

  if (!postData) {
    return {
      title: 'Post no encontrado',
    };
  }

  return {
    title: `${postData.title} | Traksal Blog`,
    description: postData.description,
    keywords: postData.keywords ? postData.keywords.split(',').map(k => k.trim()) : [],
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: 'article',
      publishedTime: postData.date,
    },
  };
}

// Generate static routes at build time
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

import * as LucideIcons from 'lucide-react';

// Custom Icon component for MDX
const Icon = ({ name, color, size = 24, float, style, className }) => {
  const formattedName = name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const LucideIcon = LucideIcons[formattedName] || LucideIcons[name];

  if (!LucideIcon) {
    return <span style={{ color: 'red' }}>[Icono "{name}" no encontrado]</span>;
  }
  
  const defaultStyle = {
    display: float ? 'block' : 'inline',
    verticalAlign: 'text-bottom',
    float: float || 'none',
    marginRight: float === 'right' ? '0' : '8px',
    marginLeft: float === 'right' ? '16px' : '0',
    marginBottom: float ? '16px' : '0',
    ...style
  };

  return (
    <LucideIcon 
      color={color || "var(--accent)"} 
      size={size} 
      style={defaultStyle}
      className={className}
    />
  );
};

// Map custom components for MDX
const components = {
  Icon
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const postData = getPostData(slug);

  if (!postData) {
    notFound();
  }

  // Fetch related posts (limit 3)
  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <>
      <Navbar lang="es" />
      <main style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '80px' }}>
        <article className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
            <Link href="/blog" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--secondary)',
              fontWeight: '600',
              marginBottom: '32px',
              textDecoration: 'none'
            }}>
              &larr; Volver al blog
            </Link>
            
            <div className="section-label" style={{ marginBottom: '16px' }}>
              <time dateTime={postData.date}>
                {new Date(postData.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
            
            <h1 className="gradient-text" style={{ paddingBottom: '8px' }}>
              {postData.title}
            </h1>
          </div>
          
          <div className={styles.articleBody}>
            <MDXRemote source={postData.content} components={components} />
          </div>
        </article>

        {/* RELATED POSTS SECTION */}
        {relatedPosts.length > 0 && (
          <section className="container" style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid var(--border-light)' }}>
            <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '40px', textAlign: 'center' }}>
              Artículos de interés
            </h2>
            
            <div className={indexStyles.grid}>
              {relatedPosts.map(({ slug: relatedSlug, date, title, description, image }) => (
                <Link href={`/blog/${relatedSlug}`} key={relatedSlug} className={indexStyles.card}>
                  {image && (
                    <div className={indexStyles.imageWrapper}>
                      <img src={image} alt={title} className={indexStyles.image} />
                    </div>
                  )}
                  <div className={indexStyles.content}>
                    <h3 className={indexStyles.title}>{title}</h3>
                    <p className={indexStyles.excerpt}>{description}</p>
                    
                    <div className={indexStyles.footer}>
                      <div className={indexStyles.readMore}>
                        Leer artículo <span>&rarr;</span>
                      </div>
                      <div className={indexStyles.date}>
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer lang="es" />
    </>
  );
}
