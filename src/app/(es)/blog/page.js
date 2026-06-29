import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './BlogIndex.module.css';

export const metadata = {
  title: 'Blog | Traksal',
  description: 'Descubre las últimas novedades, consejos de SEO y nuestras prestaciones en el blog de Traksal.',
};

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <Navbar lang="es" />
      <main style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '80px' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '0' }}>
              Blog Traksal
            </h1>
          </div>

          <div className={styles.grid}>
            {allPostsData.map(({ slug, date, title, description, image }) => (
              <Link href={`/blog/${slug}`} key={slug} className={styles.card}>
                {image && (
                  <div className={styles.imageWrapper}>
                    <img src={image} alt={title} className={styles.image} />
                  </div>
                )}
                <div className={styles.content}>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.excerpt}>{description}</p>
                  
                  <div className={styles.footer}>
                    <div className={styles.readMore}>
                      Leer artículo <span>&rarr;</span>
                    </div>
                    <div className={styles.date}>
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {allPostsData.length === 0 && (
              <p className={styles.emptyState}>
                Aún no hay artículos publicados. ¡Vuelve pronto!
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer lang="es" />
    </>
  );
}
