// app/voyages/venise/page.js
'use client';

import { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import styles from './venise.module.css';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import '@photo-sphere-viewer/markers-plugin/index.css';
import Image from 'next/image';

export default function VenisePage() {
  const panoramaRef = useRef(null);

  useEffect(() => {
    if (panoramaRef.current) {
      const viewer = new Viewer({
        container: panoramaRef.current,
        panorama: '/images/venise/panorama.jpg', // Chemin vers ton image panoramique
        plugins: [
          [MarkersPlugin],
        ],
      });

      return () => {
        viewer.destroy(); // Nettoyage pour éviter les fuites mémoire
      };
    }
  }, []);

  return (
    <div>
      <Header
        title="Carnets de Voyage"
        subtitle="Une escapade inoubliable à Venise"
        backgroundImage="/images/header-venise.jpg"
      />
      <main className={styles.mainContent}>
        <section>
          <h2>Une escapade inoubliable à Venise</h2>
          <p>
          Cet été, sur un coup de tête, nous avons fait nos valises et pris la route direction l'Italie, avec
 la Sérénissime Venise.
 Nous sommes partis du sud de la France , plus précisément de Montpellier en direction de
 Milan, notre première étape sur le chemin.
 Souhaitant voyager plus lentement, et profiter des paysages que la route nous offre, nous
 avons évité l’autoroute et sommes passés dans la campagne française et italienne aux
 multiples facettes, entre ses ravins, ses montagnes et ses forêts. Les panoramas offerts
 n’ont cessé de nous mettre des étoiles plein les yeux. Les Alpes restent un de mes endroits
 préférés en France.
          </p>
          <div className={styles.imageContainer}>
          <Image
              src="/images/venise/intro1.jpg"
              alt="milan"
              width={800}
              height={500}
            />
           </div>
           <div className={styles.imageContainer}>
          <Image
              src="/images/venise/intro2.jpg"
              alt="Burano"
              width={800}
              height={500}
            />
           </div>
           <div className={styles.imageContainer}>
          <Image
              src="/images/venise/intro3.jpg"
              alt="vue venise"
              width={800}
              height={500}
            />
           </div>
        
          <h2> Jour 1- Direction Milan</h2>
          <p>
          Nous avons pris la route dans la nuit noire, avant l’aube. Un café bien chaud pour nous
 réveiller et nous voilà partis, impatients de plonger dans cette nouvelle aventure. Avant
 même que le soleil ne se lève, nous avons déjà parcouru quelques dizaines de kilomètres.
 Notre première halte se fait dans les Gorges de Saint-May, dans la Drôme. 
 
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/drome.jpg"
              alt="petit arrêt"
              width={800}
              height={500}
            />
           </div>
  <p>
  Coupés du
 monde, au bord de la rivière, nous avons savouré notre petit-déjeuner dans la fraîcheur
 matinale des gorges avec seulement le bruit de l’eau pour troubler notre tranquillité. 
 </p>
 {/* video */}

  <p>
 Mais,
 avec une longue route devant nous, nous avons repris rapidement notre chemin.
 Un peu plus tard, sur notre trajet, nous arrivons au lac de Serre-Ponçon, une immense
 étendue d’eau nichée au cœur des montagnes.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/lac.jpg"
              alt="lac de Serre-Ponçon"
              width={800}
              height={500}
            />
           </div>
  <p>
  Sous le soleil du matin, l’eau bleutée
 scintillait sous les sommets environnants et créant un paysage à couper le souffle.
</p>
  {/* image panoramique */}
  <div className={styles.panoramaContainer} ref={panoramaRef} />

 
<p>
 Malheureusement, c’est aussi ici que nous avons rencontré nos premiers bouchons mais
 cela nous a permis de profiter un peu plus longtemps de cette vue grandiose.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/lac2.jpg"
              alt="lac de Serre-Ponçon"
              width={800}
              height={500}
            />
           </div>
           <div className={styles.imageContainer}>
          <Image
              src="/images/venise/lac3.jpg"
              alt="lac de Serre-Ponçon"
              width={800}
              height={500}
            />
           </div>
         
  <p>
 Que la route dans la montagne est agréable, nous nous régalons à traverser les Alpes avec
 ces paysages fantastiques qui se révèlent à chaque virage, traverser les fleuves aux eaux
 turquoises, admirer les montagnes qui nous font nous sentir tous petits. Au loin, nous
 apercevons même les neiges éternelles qui veillent sur notre trajet. Après la traversée de
 quelques tunnels, ça y est ! Nous venons de passer la frontière italienne !

 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/montagne1.jpg"
              alt="Statue dens les montagnes"
              width={800}
              height={500}
            />
           </div>
           <div className={styles.imageContainer}>
          <Image
              src="/images/venise/montagne2.jpg"
              alt="En route vers l'Italie"
              width={800}
              height={500}
            />
           </div>
         
  <p>
 Nous nous arrêtons peu de temps après pour grignoter au bord du Lago d’Orfu. Ce lac
 perdu, bordé de montagnes dont les sommets se perdaient dans les nuages, nous a
 réellement séduit.</p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/lac-perdue.jpg"
              alt="lac perdue"
              width={800}
              height={500}
            />
           </div>
        
         
  <p>
 La suite de la route fut moins jolie. En laissant derrière nous les belles Alpes, nous
 attaquons la campagne italienne où s’étendent des champs de maïs et de bâtiments
 abandonnés, certains en ruines, d’autres qu’ils n’ont jamais été finis. 
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/jesaispas.jpg"
              alt="je sais pas"
              width={800}
              height={500}
            />
           </div>
        
         
  <p>
 D’ailleurs, la rumeur ne
 ment pas : les Italiens ont une conduite nerveuse et sportive, qui nous a donné quelques
 sueurs froides. Il nous a fallu quelques kilomètres pour comprendre leurs règles de conduite.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/jesaispas.jpg"
              alt="je sais pas"
              width={800}
              height={500}
            />
           </div>
        
         
  <p>
 Enfin, nous arrivons à Milan après 10h de route fatigante ! Nous arrivons devant l’entrée de
 l'hôtel en voiture, un vigile nous parle mais nous n’avons pas tout compris entre la fatigue, la
langue et l’accent.
</p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/hotel.jpg"
              alt="entré de l'hotel"
              width={800}
              height={500}
            />
           </div>
        
         
  <p> Il nous laisse rentrer malgré tout et nous nous rendons compte que ce
 n’est pas le parking… Heureusement, quand nous repassons, il nous indique gentiment où
 nous pouvons laisser la voiture en sécurité.
 Nous avons passé la nuit à l'hôtel Da Vinci, situé à l’extérieur de la ville, grâce à une
 Wonderbox offerte par mon oncle. 
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/chambre.jpg"
              alt="chambre"
              width={800}
              height={500}
            />
           </div>
        
         
  <p>La chambre était confortable, bien que des traces d’usure
 soient visibles, comme sur le décor à l’arrière du lit où le simili cuir s’effritait.
 Mais en revanche, l’état de la salle de bain laissait grandement à désirer entre un ménage
 plus que léger, le bois du bas de l’encadrement de la porte pourri et les carreaux manquant
 dans la douche.<p>
  {/* video */}
 </p>
 L'hôtel idéalement situé nous a permis d’atteindre le cœur de Milan en à peine vingt minutes
 grâce à la gare juste à côté. Nous étions peut-être fatigués de la route de la journée, mais
 également excités à l’idée de découvrir cette cité.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/milan.jpg"
              alt="train"
              width={800}
              height={500}
            />
           </div>
        
         
  <p>
 Nous voilà parti à la découverte de la ville ! Nous commençons par nous balader
 tranquillement à notre rythme, découvrant les rues de la ville, admirant les bâtiments autour
 de nous.<p>

 </p>
 Nous passons les portes avec les grilles impressionnantes au-dessus de nos têtes et
 traversons la cour du Château des Sforza datant de la renaissance italienne, admirant son
 architecture imposante.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/entre.jpg"
              alt="entre"
              width={800}
              height={500}
            />
           </div>
        
         
  <p> Cette forteresse, en brique rouge, se dresse majestueusement avec
 ses hauts murs et ses grandes tours rondes, évoquant la puissance et la grandeur d’antan.
 Les détails de la façade, tels que les créneaux et les douves, ajoutent au caractère
 impressionnant du château. </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/interieur.jpg"
              alt="chateau"
              width={800}
              height={500}
            />
           </div>
        
         
  <p>Ce vestige du passé est un symbole puissant de la ville, ce qui
 en fait une visite incontournable. Aujourd’hui, le château abrite plusieurs musées consacrés
 à l’histoire du monument et à l’art, offrant une expérience culturelle riche. Malheureusement,
 nous n'avons pas pu en profiter en raison de notre arrivée tardive à Milan.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/milan2.jpg"
              alt="milan"
              width={800}
              height={500}
            />
           </div>
        
         
  <p>
 Nous poursuivons notre exploration de la ville en nous rendant sur la Piazza del Duomo,
 l'une des places les plus célèbres de Milan. Cette place offre une vue incontournable sur la
 cathédrale.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/cathedrale.jpg"
              alt="cathédrale"
              width={800}
              height={500}
            />
           </div>
        
         
  <p> Le Duomo est un bâtiment imposant en pierre blanche et grise, décoré de
 centaines de sculptures. Ses flèches s'élancent vers le ciel, et ses nombreux vitraux
 témoignent de la grandeur et de la finesse de l’architecture médiévale. Immense et
 majestueux, le bâtiment s'élève avec une présence impressionnante qui domine la place,
 offrant un exemple remarquable de l'art et du savoir-faire de l'époque. Il est d’ailleurs
 possible de monter en haut, d’où il offre une vue splendide sur la ville.<p>

 </p>
 Nos pas nous mènent maintenant vers la Galleria Vittorio Emanuele II, un édifice prestigieux
 que l’on aperçoit de loin grâce à ses immenses dômes en verre. </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/entre2.jpg"
              alt="Galleria Vittorio Emanuele II"
              width={800}
              height={500}
            />
           </div>
        
         
  <p>
  Ce centre commercial est
 orné de mosaïques colorées représentant les signes du zodiaque, tandis que ses arcs
 majestueux et son toit en fer forgé témoignent de la grandeur de l'architecture du 19e siècle.
 Ses grandes verrières captent magnifiquement la lumière du soleil couchant, créant un
 spectacle éblouissant.</p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/dome.jpg"
              alt="Galleria Vittorio Emanuele II"
              width={800}
              height={500}
            />
           </div>
        
         
  <p>
 Sur les conseils de ma belle-sœur et de mon frère, nous nous arrêtons chez Zia Esterina
 Sorbillo, une petite boutique emblématique de la ville. </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/pizzeria.jpg"
              alt="Zia Esterina Sorbillo"
              width={800}
              height={500}
            />
           </div>
        
         
  <p>Cet établissement est réputé pour ses
 pizzas frites à emporter, une spécialité locale. A moindre coût, nous avons eu un repas
 original, ce n’était pas mémorable mais bon quand même. Nous avons pu grignoter notre
 pitance sur un banc à proximité. </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/pizza.jpg"
              alt="Zia Esterina Sorbillo"
              width={800}
              height={500}
            />
           </div>
        
         
  <p>
Pour terminer notre soirée en beauté, nous savourons une glace généreuse et parfumée
 achetée chez Gelato Fatto Con Amore, un glacier artisanal. Nous la dégustons sur le
 chemin du retour vers la gare. Il est maintenant temps de rentrer, car une longue route nous
 attend encore demain.
          </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/glace.jpg"
              alt="fin de journé"
              width={800}
              height={500}
            />
           </div>
        
         
  
          {/* Ajoute ton contenu ici */}
        </section>
      </main>
    </div>
  );
}



export const metadata = {
  title: 'Carnets de Voyage - Une escapade inoubliable à Venise',
  description: 'Découvrez notre aventure à Venise, en Italie, de Milan aux paysages alpins, avec des photos et récits captivants.',
  openGraph: {
    title: 'Carnets de Voyage - Une escapade inoubliable à Venise',
    description: 'Découvrez notre aventure à Venise, en Italie, de Milan aux paysages alpins, avec des photos et récits captivants.',
    url: 'https://www.cmcarnetdevoyage.com/voyages/venise',
    images: [
      {
        url: '/images/venise/intro1.jpg',
        alt: 'Une vue magnifique de Milan en route vers Venise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carnets de Voyage - Une escapade inoubliable à Venise',
    description: 'Notre voyage en Italie, de Milan à Venise, avec des anecdotes et des paysages incroyables.',
    images: ['/images/venise/intro1.jpg'],
  },
};