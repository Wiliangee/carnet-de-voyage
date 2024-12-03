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
          <a href="/voyages/venise" className={styles.navButton}>
            <img src="/icons/italy-flag.png" alt="Italie" className={styles.flagIcon} />
            Venise
          </a>
          <a href="/voyages/londres" className={styles.navButton}>
            <img src="/icons/uk-flag.png" alt="Royaume-Uni" className={styles.flagIcon} />
            Londres
          </a>
         {/* <a href="/contact" className={`${styles.navButton} ${styles.contactButton}`}>
            Contact
          </a>*/}
        </nav>
          <h2>Un petit mot sur nous
          </h2>
          <p>
          Nous sommes Chloé et Marc, un couple amoureux et passionné. Ensemble, nous
partageons une passion pour les voyages, les découvertes et les aventures qui rythment
notre quotidien. À travers ce blog, nous voulons vous emmener avec nous dans nos
explorations et vous faire découvrir notre univers en partageant avec vous nos
photographies et récits de voyages.

          </p>
          <div className={styles.photos}>
            <Image
              src="/images/photo1.jpg"
              alt="Chloé et Marc"
              width={800}
              height={500}
            />
            </div>
            <p>
            C’est grâce à une amie que nous nous sommes rencontrés, et un peu plus d’un mois plus
tard, nous partions déjà à l’aventure pour un week-end en tente en Lozère. Un début
audacieux !
       </p>
       <div className={styles.photos}>
            <Image
              src="/images/photo2.jpg"
              alt="Chloé et Marc"
              width={800}
              height={500}
            />
            </div>

            <p>
            Marc, codeur et gestionnaire du blog, est avant tout un grand gamer. En voyage, il est
responsable du sac à dos et de la carte. Il voyage à travers les univers des jeux vidéo autant
qu’à travers le monde. Côté professionnel, il ne craint pas le froid travaillant en tant que
frigoriste, c’est ainsi qu’il sait trouver les meilleures adresses pour un bon resto.

            </p>
            <div className={styles.photos}>
            <Image
              src="/images/marc.jpg"
              alt=" Marc"
              width={800}
              height={500}
            />
            </div>
            <p>
            Chloé est spécialisée dans l’écriture des articles et la photographie. Passionnée par la
nature et les animaux, elle adore partir à l’aventure, notamment en randonnée avec ses
chevaux et son chien. Malgré son expérience dans la nature, son sens de l’orientation laisse
à désirer, plus d’une nature papillon à s’arrêter faire des photos toutes les 2 minutes. Elle
porte une double casquette professionnelle en étant assistante comptable et masseuse
équin sur son temps libre. N’hésitez pas à la suivre sur instagram 
<a href="https://www.instagram.com/chloehaudry.masseuse.equin/"> @chloehaudry.masseuse.equin !</a>



            </p>

            <div className={styles.photos}>
            <Image
              src="/images/Chloe.jpg"
              alt=" Chloé"
              width={800}
              height={500}
            />
            </div>

            <p>
            Notre petite (grande ?) famille est complétée par deux chevaux, un chien et un chat.
          </p>

          <div className={styles.photos}>
            <Image
              src="/images/chien.jpg"
              alt=" chien"
              width={800}
              height={500}
            />
            </div>
            <div className={styles.photos}>
            <Image
              src="/images/chat.jpg"
              alt=" chat"
              width={800}
              height={500}
            />
            </div>
            <div className={styles.photos}>
            <Image
              src="/images/cheveaux.jpg"
              alt="cheveaux"
              width={800}
              height={500}
            />
            </div>

            <p>
            Notre objectif avec ce blog est de partager nos aventures et de vous donner envie de partir
à la découverte du monde ! Que ce soit proche de chez nous ou à l’autre bout du globe,
chaque coin est à explorer.

N’hésitez pas à nous suivre sur Instagram :  <a href= "https://www.instagram.com/c.m.carnetdevoyage/"> @c.m.carnetdevoyage</a>! Et vous quel voyage
rêvez-vous de faire ?
 </p>

        </section>
        <footer className={styles.footer}>
      <div>
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
    </footer>
 
      </main>
    </div>
    )
         }
         export const metadata = {
          title: 'Carnets de Voyage - Accueil',
          description:
            'Rejoignez Chloé et Marc dans leurs aventures autour du monde. Découvrez des récits passionnants et des photographies époustouflantes.',
          keywords: [
            'Carnets de Voyage',
            'Voyage',
            'Blog de voyage',
            'Chloé et Marc',
            'Aventures',
            'Tour du monde',
            'Photographie',
          ],
          author: 'Chloé et Marc',
          openGraph: {
            title: 'Carnets de Voyage - Accueil',
            description:
              'Rejoignez Chloé et Marc dans leurs aventures autour du monde. Découvrez des récits passionnants et des photographies époustouflantes.',
            url: 'https://carnet-de-voyage-c.fr',
            type: 'website',
            images: [
              {
                url: '/images/header-home.jpg',
                width: 1200,
                height: 630,
                alt: 'Chloé et Marc en voyage',
              },
            ],
            locale: 'fr_FR',
            siteName: 'Carnets de Voyage',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Carnets de Voyage - Accueil',
            description:
              'Découvrez nos aventures autour du monde sur Carnets de Voyage. Suivez Chloé et Marc dans leurs explorations.',
            images: ['/images/header-home.jpg'],
            // Champ `creator` supprimé car pas de compte Twitter
          },
          robots: {
            index: true,
            follow: true,
          },
          themeColor: '#ffffff',
        };
        
        