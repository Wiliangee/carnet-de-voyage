// app/page.js
import Header from './components/Header';
import styles from './home.module.css';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <Header
        title="Carnets de Voyage"
        subtitle="Chloé et Marc"
        backgroundImage="/images/header-home.jpg"
      />
      <main className={styles.mainContent}>
        <section className={styles.presentation}>
        <nav className={styles.navButtons}>
          {/*<a href="/voyages/venise" className={styles.navButton}>
            <img src="/icons/italy-flag.png" alt="Italie" className={styles.flagIcon} />
            Venise
          </a>*/}
          <a href="/voyages/londres" className={styles.navButton}>
            <img src="/icons/uk-flag.png" alt="Royaume-Uni" className={styles.flagIcon} />
            Londres
          </a>
         {/* <a href="/contact" className={`${styles.navButton} ${styles.contactButton}`}>
            Contact
          </a>*/}
        </nav>
          <h2>Bienvenue sur notre blog de voyage</h2>
          <p>
            Nous sommes Chloé et Marc, passionnés de voyages et de découvertes. 
            À travers ce blog, nous partageons nos aventures aux quatre coins du monde.
          </p>
          <div className={styles.photos}>
            <Image
              src="/images/photo1.jpg"
              alt="Chloé et Marc"
              width={800}
              height={500}
            />
            </div>
            <div className={styles.photos}>
            <Image
              src="/images/photo2.jpg"
              alt="Chloé et Marc"
              width={300}
              height={200}
            />
          </div>
        </section>
      
      </main>
    </div>
  );
}
