// app/components/SocialIcons.js
import Image from 'next/image';
import styles from './SocialIcons.module.css';

export default function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      <a href="https://www.instagram.com/c.m.carnetdevoyage/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/icons/instagram.png"
          alt="Instagram"
          width={30}
          height={30}
          className={styles.icon}
        />
      </a>
      <a href="https://www.youtube.com/@Chlo%C3%A9etMarcCarnetdeVoyage" target="_blank" rel="noopener noreferrer">
        <Image
          src="/icons/youtube.png"
          alt="YouTube"
          width={30}
          height={30}
          className={styles.icon}
        />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61563758530618&rdid=W5elENd8syaly62b&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FhcMKVLQDdYL6sX9T%2F" target="_blank" rel="noopener noreferrer">
        <Image
          src="/icons/facebook.png"
          alt="Facebook"
          width={30}
          height={30}
          className={styles.icon}
        />
      </a>
      <a href="https://www.tiktok.com/@c.m.carnet.de.voyage" target="_blank" rel="noopener noreferrer">
        <Image
          src="/icons/tiktok.png"
          alt="TikTok"
          width={30}
          height={30}
          className={styles.icon}
        />
      </a>
      
      <a href="https://pin.it/5IFy3Zi92" target="_blank" rel="noopener noreferrer">
        <Image
          src="/icons/Pinterest.png"
          alt="Pinterest"
          width={30}
          height={30}
          className={styles.icon}
        />
      </a>
     
    </div>
  );
}
