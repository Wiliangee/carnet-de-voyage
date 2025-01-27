// app/voyages/venise/page.js
"use client"; // Ajoutez cette ligne en haut du fichier

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
 {/*
 <div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/9H9Fx0cMj0c"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
*/}
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
 dans la douche.</p>
  {/* video */}
 <p>
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
 de nous.</p>

 <p>
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
 Sorbillo, une petite boutique emblématique de la ville.
  </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/pizzeria.jpg"
              alt="Zia Esterina Sorbillo"
              width={800}
              height={500}
            />
           </div>
        
         
<p>
 Cet établissement est réputé pour ses
 pizzas frites à emporter, une spécialité locale. A moindre coût, nous avons eu un repas
 original, ce n’était pas mémorable mais bon quand même. Nous avons pu grignoter notre
 pitance sur un banc à proximité.
  </p>
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
        
        
        <h2>Jour 2- De Milan à Venise</h2>
        <p>
 Après une bonne nuit de sommeil, nous commençons la journée par un bon petit-déjeuner à
 l'hôtel, le buffet à volonté était bien garni avec des fruits, des légumes, et d’autres options
 plus gourmandes. En pleine forme, le ventre plein, nous voilà prêt à reprendre la route !
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/petitedeje.jpg"
              alt="petit dejeuner"
              width={800}
              height={500}
            />
           </div>
           <p>
 Nous empruntons à nouveau les routes de campagne, où le paysage se transforme
 progressivement en vallées ondulantes et les cultures se diversifient légèrement. Le long de
 notre trajet, des bâtiments intéressants attirent notre regard. Suivant notre instinct, nous
 faisons une pause pour admirer le sanctuaire de Santa Maria del Fonte.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/decouvertedomme.jpg"
              alt="decouverte eglise"
              width={800}
              height={500}
            />
           </div>
           <p>
 Ce bâtiment massif, aux façades blanches et rouges, est couronné d’une coupole de cuivre
 bleuté qui s’élève majestueusement vers le ciel. Son architecture dégage une aura de calme
 et invite à la contemplation et au recueillement. Ce sanctuaire est paisible avec une
 élégance discrète et un charme intemporel. Nous nous sommes baladés dans les jardins,
 nous imprégnant du calme des lieux que seul le chant des oiseaux perturbait.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/sanctuaire-santa-maria.jpg"
              alt="Santa Maria"
              width={800}
              height={500}
            />
           </div>
           <p>
 Ce sanctuaire est dédié à la Vierge Marie car la légende locale raconte qu’elle serait apparu
 à un berger nommé Giovanni, elle en aurait alors demandé sa construction en ce lieu, à côté
 d’une source d'eau bénite. Aujourd’hui, en raison de cette légende, ce sanctuaire est un lieu
 central de la culture religieuse de la région et attire de nombreux pèlerins. </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/sanctuaire-santa-maria1.jpg"
              alt="Santa Maria"
              width={800}
              height={500}
            />
           </div>
           <p>
 Nous avons repris notre chemin, avançant doucement mais sûrement vers notre destination
 finale mais avant cela, il nous restait un dernier arrêt sur le chemin.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/lac-de-garde.jpg"
              alt="lac de garde "
              width={800}
              height={500}
            />
           </div>
           <p>
 C’est ainsi que nous sommes arrivés sur les rives du Lac de Garde. 
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/lac-de-garde2.jpg"
              alt="lac de garde"
              width={800}
              height={500}
            />
           </div>
           <p>
            Le soleil brillait si fort
 que nous peinions à distinguer les montagnes le bordant, tandis que l’eau scintillait sous sa
 lumière éclatante et le ciel devenu blanc sous l’effet de la chaleur. Nous nous sommes
 promenés le long des rives, profitant du paysage, entre l’étendue d’eau paisible et les
 maisons italiennes entourées de verdure.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/lac-de-garde3.jpg"
              alt="lac de garde"
              width={800}
              height={500}
            />
           </div>
           <p>
 Nous avons profité de notre pause pour nous arrêter manger. Nous avons trouvé une petite
 pizzeria, Le Pergole, où nous avons pu nous installer en terrasse autour d'une bière et d'une
 pizza. L'endroit était simple, le service rapide et les prix abordables, parfait pour une pause
 conviviale avant de reprendre la route.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/pizza3.jpg"
              alt="pizza"
              width={800}
              height={500}
            />
           </div>
           <p>
 Voilà, ça y est c’est la dernière ligne droite, il nous reste encore quelques heures de route
 avant d’arriver à destination mais nous avons hâte de découvrir la belle Sérénissime.
 L’arrivée fut sportive ! Le temps de garer la voiture, nous nous sommes fait appeler par la
 dame de l’accueil, nous pressant avec les bagages, pour que l’on puisse monter à bord du
 bateau par justesse.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/Parcheggio-Marive-Mestre-Ferry.jpg"
              alt="bateau"
              width={800}
              height={500}
            />
           </div>
           <p>
Le cœur battant, nous voilà à bord du bateau, discernant au loin les berges de la ville. Il
 nous reste encore une étape avant de pouvoir explorer : déposer nos affaires à l'hôtel.
 Traverser les ruelles animées et les ponts, au milieu de la foule de touristes et sous la
 chaleur estivale, ne fut pas une mince affaire. Ce fut avec un grand soulagement que nous
 sommes enfin arrivés à l'hôtel, couverts de sueur.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/venise.jpg"
              alt="arrivée à Venise"
              width={800}
              height={500}
            />
           </div>
           <div className={styles.imageContainer}>
          <Image
              src="/images/venise/venise2.jpg"
              alt="arrivée à Venise"
              width={800}
              height={500}
            />
           </div>
           <div className={styles.imageContainer}>
          <Image
              src="/images/venise/hotel2.jpg"
              alt="hotel"
              width={800}
              height={500}
            />
           </div>
           <p>
 L’accueil fut un peu délicat, le réceptionniste nous parlait du bout des lèvres chuchotant
 presque rendant la compréhension et la communication difficile même en se débrouillant en
 anglais et avec quelques notions d’italien. 
 
            Ayant réservé l'hôtel via une plate-forme, nous
 avions quelques questions concernant les activités réservées auxquelles nous n’avons eu
 aucune réponse. Nous avons eu l’impression de le déranger et de ne pas être à notre place.
 Nous découvrons notre chambre pour les prochains jours, nous avons à disposition
 plusieurs lits (deux simples et un double), dans l’ensemble elle est magnifique, décorée
 dans le style de Venise avec une grande fresque représentant des gondoles. La vue depuis
 la fenêtre donnait sur un canal avec le passage des gondoles, à certains moments de la
 journée, nous pouvions même les entendre chanter.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/hotel3.jpg"
              alt="chambre d'hotel"
              width={800}
              height={500}
            />
           </div>
           <div className={styles.imageContainer}>
          <Image
              src="/images/venise/hotel4.jpg"
              alt="chambre d'hotel"
              width={800}
              height={500}
            />
           </div>
           <p>
             La salle de bain est magnifique, nous
 avons droit à une belle baignoire et nous retrouvons le fameux bidet italien. La seule
 déception est que, bien que l'hôtel soit supposé être interdit aux enfants, nous aurions
 souhaité une décoration un peu plus romantique.</p>
 <p>
 Après une courte pause pour récupérer du voyage, nous sommes prêts à repartir et à
 découvrir la belle Sérénissime. Nous arpentons les ruelles sans but précis, tombant par
 hasard sur les jardins royaux “Giardini Reali“, l’un des seuls parcs de Venise.
</p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/park.jpg"
              alt="park"
              width={800}
              height={500}
            />
           </div>
           <p>
             Un écrin de
 verdure avec les arbres se dressant au-dessus de nous, des bancs sont aménagés afin
 d’encourager les gens à profiter du calme de l’endroit. </p>
 
           <p>
 Nous nous promenons ensuite le long de la lagune de Venise, profitant de l’ambiance festive
 des vendeurs de souvenirs le long de l’eau. Nous admirons les gondoles bercées par les
 vagues et la majestueuse Basilique Santa Maria della Salute, baignée dans la douce lumière
 du soleil couchant. </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/santa-maria.jpg"
              alt="basilique santa maria"
              width={800}
              height={500}
            />
           </div>
           <p>
 Nous nous laissons guider par l’effervescence de la ville jusqu’à atteindre l’une des places
 les plus emblématiques de Venise : la Piazza San Marco.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/place_marco.jpg"
              alt="place marco"
              width={800}
              height={500}
            />
           </div>
           <p>
 Cette place, la plus célèbre de la Sérénissime, impressionne par sa grandeur, à l'image des
 monuments qui l'entourent. La basilique Saint-Marc, avec ses mosaïques étincelantes
 bordées d'or et ses coupoles dorées, en est l'un des joyaux.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/basilique.jpg"
              alt="basilique saint marco"
              width={800}
              height={500}
            />
           </div>
           <p> À ses côtés, le Palais des
 Doges, chef-d'œuvre architectural en pierres blanches et roses, témoigne de la richesse et
 du pouvoir de l'ancienne République de Venise. Surplombant le tout, le Campanile, une tour
 majestueuse de près de 100 mètres de haut, domine l'horizon et offre une vue imprenable
 sur la ville. Bien d’autres choses composent cette place et en font un lieu unique au monde.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/Campanile.jpg"
              alt="Campanile"
              width={800}
              height={500}
            />
           </div>
           <p>
 Nous poursuivons notre promenade à travers les ruelles, traversant des ponts, émerveillés
 par le passage des gondoliers et découvrant peu à peu d'autres facettes de cette magnifique
 cité. Au fond d’une ruelle étroite, nous dénichons un petit restaurant, le Bacarando Corte
 dell'Orso, qui propose des spécialités vénitiennes. Les plats, savoureux et généreusement
 nappés d'huile d'olive italienne, étaient un véritable délice.
 </p>
 <div className={styles.imageContainer}>
          <Image
              src="/images/venise/pate.jpg"
              alt="repas"
              width={800}
              height={500}
            />
           </div>
           <p>
 Après ce délicieux repas, il est temps de rentrer à l'hôtel, la fatigue de cette journée bien
 remplie se faisant sentir. Les prochains jours s'annoncent riches en découvertes et en
 nouvelles aventures. Ce voyage promet déjà d’être inoubliable !
        </p>
        <div className={styles.imageContainer}>
          <Image
              src="/images/venise/voyage.jpg"
              alt="fin de journé"
              width={800}
              height={500}
            />
           </div>
  
          {/* Ajoute ton contenu ici */}
        </section>
    




  {/* logo resau bas de page */}
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




    {/* Bouton de retour en haut de page */}
    <div className={styles.backToTop}>
      <a href="#top">
        <Image
      src="/icons/chevron-double-up.png"
      alt="haut de page"
      width={30}
      height={30}
      className={styles.icon}
      />
      </a>
    </div>
  </main>
</div>
);
}