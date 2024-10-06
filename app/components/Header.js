// app/components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from './SocialIcons';
import styles from './Header.module.css';

export default function Header({ title, subtitle, backgroundImage }) {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <meta name="description" content="Découvrez nos aventures autour du monde avec des photos et des récits détaillés. Chloé et Marc vous emmènent dans leurs escapades." />
      
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.headerContent}>
        <h1 className={styles.mainTitle}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <SocialIcons />
    </header>
  );
}
