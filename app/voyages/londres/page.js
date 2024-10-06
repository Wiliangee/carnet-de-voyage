// app/voyages/londres/page.js
import Header from '../../components/Header';
import styles from './londres.module.css';
import Image from 'next/image';

export default function LondresPage() {
  return (
    <div>
      <Header
        title="Carnets de Voyage"
        subtitle="Londres en deux jours à la découverte des incontournables"
        backgroundImage="/images/header-londres.jpg"
      />
      <main className={styles.mainContent}>
        {/* Introduction */}
        <section className={styles.section}>
          <h2>Introduction</h2>
          <p>
           
            Qui n'a jamais rêvé de fouler le sol de Londres, cette ville mythique qui mêle tradition et
            modernité ? Au début de l'année, mon compagnon et moi avons eu la chance de réaliser ce rêve
            lors d'un court séjour de deux jours. Pour lui, ce fut une découverte totale, tandis que pour moi,
            c'était l'occasion de retrouver une ville qui ne cesse de me fasciner.
            
          </p>
          {/* Emplacement pour une photo */}
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/londres-intro.jpg"
              alt="Vue de Londres"
              width={800}
              height={500}
            />
            
          </div>
        </section>

        {/* Jour 1 */}
        <section className={styles.section}>
          <h2>Jour 1 - Découverte de l’histoire de Londres</h2>
          <p>
Nous partons à la découverte de la ville et de son histoire. Je nous avais préparé tout un itinéraire 
 pour voir un maximum de la ville avec le London Pass qui n’est valable que 24h, mais qui permet 
de visiter les plus grands monuments et donne accès à une multitude d’activités, tel un passeport 
pour explorer la ville en économisant de l’argent.
          </p>

          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/itineraire-jour-1.jpg"
              alt="itineraire jour 1"
              width={800}
              height={500}
            />
            
          </div>
          <p>
Nous commençons la journée en sautant dans le métro de Queensway jusqu’à la cathédrale 
Saint-Paul.  
Au détour d'une rue, nous découvrons la cathédrale Saint-Paul qui se dévoile dans toute sa 
splendeur. Son imposant dôme, pointé vers le ciel, semble toucher les nuages. Nous sommes 
saisis par la grandeur et la majesté de cet édifice. 
          </p>

          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/cathédrale-ext.jpg"
              alt="cathédrale"
              width={800}
              height={500}
            />
          </div>
          <p>
Ce chef-d'œuvre architectural est notamment célèbre pour ses grands dômes, véritable 
signature de l'édifice. Érigée par Christopher Wren après le Grand Incendie de 1666, la cathédrale 
symbolise la renaissance de Londres.  
A l’intérieur, nous sommes éblouis par les détails architecturaux, les décors des plafonds sont 
splendides et les fenêtres invitent une douce lumière dans le bâtiment. 
Dès que nous sommes rentrés à l’intérieur, un garde nous interpelle car nous sommes montés 
sur une marche pour voir le bénitier de plus près, ce qui était interdit ! 
Nous explorons l’édifice qui nous donne un sentiment humble devant sa majesté, découvrant 
son histoire et ses vitraux. C’est ici qu’a été célébré le mariage de la princesse Diana et du prince 
Charles, aujourd’hui roi, en 1981. 
          </p>


          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/cathédrale-int1.jpg"
              alt="cathédrale"
              width={800}
              height={500}
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/cathédrale-int2.jpg"
              alt="cathédrale"
              width={800}
              height={500}
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/cathédrale-int3.jpg"
              alt="cathédrale"
              width={800}
              height={500}
            />
          </div>


          <p>
En quittant la cathédrale, nous ressentons un profond sentiment de respect et d'émerveillement. 
Nous avons visité un lieu chargé d'histoire, un véritable joyau de l'architecture britannique. Avant 
de sortir, nous avons laissé notre trace, en mettant un petit mot parmi ceux des autres voyageurs 
qui nous ont précédés. 
          </p>

          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/message.jpg"
              alt="message"
              width={800}
              height={500}
            />
          </div>


          <p>
Nous reprenons notre chemin à travers Londres, découvrant son architecture à la fois moderne 
et plus ancienne. Nous baladons entre les buildings et des immeubles victoriens, apercevant les 
cabines téléphoniques rouges, emblème de la ville.  
          </p>

          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/ville1.jpg"
              alt="immeubles"
              width={800}
              height={500}
            />
          </div>


          <p>

Nous tombons sur la Tamise et ses flots noirs semblent aspirer le peu de lumière du ciel, rempli 
de nuages gris sombre, renforçant cette impression de mystère, animés entre les bateaux, les 
ponts et ses oiseaux. Au loin, nous apercevons le Tower Bridge qui se dresse fièrement sur l’eau, 
tel un géant de pierre et de fer, gardien de la ville et monument emblématique de la cité. 

          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/ville2.jpg"
              alt="la Tamise"
              width={800}
              height={500}
            />
          </div>


          <p>
Une tour se dresse fièrement parmi les nuages bas et gris, The Shard. Tel un mirage, son sommet 
apparaît et disparaît dans les volutes cotonneuses. Nous la surveillons du coin de l'œil car nous 
devons y monter plus tard dans la journée, impatients de découvrir la vue panoramique qu'elle 
promet. 
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/TheShard-ext.jpg"
              alt="The Shard"
              width={800}
              height={500}
            />
          </div>


          <p>

Nous dénichons une vieille église abandonnée St Dunstan's Hill, ce lieu mélancolique, envahi où 
la nature a repris ses droits même au cœur de la cité Londonienne. Les murs en ruine semblent 
murmurer d'anciennes légendes, celles de Saint Dunstan et de ses combats contre les forces 
obscures. 
Les restes de St Dunstan-in-the-East témoignent des ravages de la guerre et de la capacité de la 
nature à reprendre ses droits, même dans les endroits les plus inattendus. 
Nous sommes passées à la fin de l’hiver, par un temps nuageux, ce qui rendait ce site encore plus 
triste renforçant la couleur grise, voire noire des pierres. La mousse recouvrant petit à petit les 
murs, tandis que le lierre était encore nu de l’hiver renforçait l’aspect sombre et mystérieux de ce 
lieu caché. 
        </p>
        
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/vieille-église1.jpg"
              alt="St Dunstan's Hill"
              width={800}
              height={500}
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/vieille-église2.jpg"
              alt="St Dunstan's Hill"
              width={800}
              height={500}
            />
          </div>
        <p>

La légende de St Dunstan et le diable 
Selon la légende, Saint Dunstan, qui était également forgeron, aurait été un jour dérangé dans 
son travail par Satan. Le diable, sous une apparence trompeuse, aurait demandé à Dunstan de 
lui ferrer les sabots. 
Profitant de cette opportunité, Dunstan aurait saisi une paire de tenailles incandescentes et 
aurait saisi le diable par le nez. Le diable, pris au piège, aurait supplié Dunstan de le relâcher, 
promettant en échange de ne plus jamais entrer dans une maison surmontée d'un fer à cheval. 
C'est ainsi que le fer à cheval est devenu un porte-bonheur et un symbole de protection contre le 
mal. 

          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/vieille-église3.jpg"
              alt="St Dunstan's Hill"
              width={800}
              height={500}
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/vieille-église4.jpg"
              alt="St Dunstan's Hill"
              width={800}
              height={500}
            />
          </div>
          <p>
Nos pas nous mènent désormais vers le cœur de la cité historique, nous arrivons à la tour de 
Londres. Nous explorons cette forteresse construite en 1078, témoin de l’histoire de l’Angleterre, 
son atmosphère médiévale nous met dans l’ambiance.  
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/tour-de-Londres1.jpg"
              alt="La tour de Londres"
              width={800}
              height={500}
            />
          </div>       
          <p>
Les corbeaux font partie intégrante des lieux. Une légende aux origines floues y est associée : « Si 
les corbeaux de la Tour de Londres sont perdus ou s'envolent, la Couronne d'Angleterre tombera 
et la Grande-Bretagne avec elle ». Ces oiseaux, toujours présents au nombre de sept, perpétuent 
ce mythe. Ils sont choyés par leur gardien, un "Ravenmaster", qui veille sur leur santé et leur bien
être, il raconte également leur légende aux visiteurs de passage.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/corbeaux.jpg"
              alt="corbeaux"
              width={800}
              height={500}
            />
          </div>       
          <p>
Au fil de notre visite, nous apercevons des animaux faits de métal, figés dans leurs mouvements, 
disséminés à travers les lieux. Ces sculptures m'ont donné une impression étrange, comme si 
les animaux s'apprêtaient à prendre vie à tout moment, reprenant possession des lieux tels des 
fantômes du passé. Ils rendent honneur aux anciens habitants de la Tour, en effet, elle fut le 
premier zoo de Londres. La ménagerie royale commença par l’échange de cadeaux entre autres 
des ours polaires, des lions, ou encore des singes, entre souverains. 
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/zoo1.jpg"
              alt="singes"
              width={800}
              height={500}
            />
          </div> 
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/zoo2.jpg"
              alt="ours polaires"
              width={800}
              height={500}
            />
          </div>        
          <p>
Malgré la présence de sortie scolaire, nous avons réussi à nous frayer un chemin jusqu’aux joyaux 
de la couronne, vibrant témoin de l’histoire. Un trésor protégé par la Tour de Londres depuis 
plusieurs siècles. Ce sont de véritables œuvres d’arts d’orfèvrerie, chaque pièce a été travaillée 
avec un soin particulier. Ces joyaux ayant servi au couronnement des rois et des reines de 
l’histoire de l’Angleterre. 
Nous continuons notre visite, parcourant le temps, en voyant les différents armements, les 
armures et équipements évoluer. Au fil des siècles, les armes sont devenues de plus en plus 
sophistiquées, reflétant les progrès technologiques et les changements dans les modes de 
combat. 
Au fil des couloirs et des visites, nous croisons une créature de feu et de métal prête à cracher sa 
flamme sur nous, gardienne des lieux et symbole de la puissance britannique. 
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/créature.jpg"
              alt="une créature de feu et de métal"
              width={800}
              height={500}
            />
          </div> 
                
          <p>

Après presque 3h sous une pluie battante, notre exploration de la Tour de Londres touche à sa 
fin. Nous avons exploré les recoins cachés et découvert ses secrets. Ce fut pour nous un véritable 
voyage dans le temps en parcourant cette forteresse et ce sont des étoiles plein les yeux que 
nous quittons cet endroit. 
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/tour-de-Londres2.jpg"
              alt="Tour de Londres"
              width={800}
              height={500}
            />
          </div> 
                
          <p>
Nous changeons d’ambiance, en allant visiter le Tower Bridge, à quelques pas de la Tour de 
Londres, ce pont emblématique de la ville est une icône de l’Angleterre. C’est du coup, une visite 
plus industrielle qui nous permet de découvrir l’intérieur de ce géant de pierre et de fer.  
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/Tower-Bridge-ext1.jpg"
              alt="Tower Bridge"
              width={800}
              height={500}
            />
          </div> 
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/Tower-Bridge-ext2.jpg"
              alt="Tower Bridge"
              width={800}
              height={500}
            />
          </div>
                
          <p>

Le Tower Bridge construit à la fin du XIXème siècle s'élève au-dessus de la Tamise avec ces deux 
tours impressionnantes. Initialement, il fut construit pour faciliter le passage aux navires en 
levant ses deux bras latéraux.  Nous avons affronté ses marches, et comme récompense avons 
été ébloui par la vue de la ville perdue dans la brume qu’il proposait. 
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/Vue-Tower-Bridge1.jpg"
              alt="Vue de Tower Bridge"
              width={800}
              height={500}
            />
          </div> 
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/Vue-Tower-Bridge2.jpg"
              alt="Vue de Tower Bridge"
              width={800}
              height={500}
            />
          </div> 
          <p>
Nous avons pu traverser le pont grâce à la passerelle en verre et se tenir à plus de 60 m au-dessus de la Tamise. 
Malgré mon vertige, c’est une expérience impressionnante de se tenir aussi haut.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/passerelle-en-verre.jpg"
              alt="La passerelle en verre "
              width={800}
              height={500}
            />
          </div> 
          <p>
Nous finissons la visite par la salle des machines, nous voyons les moteurs qui permettent au 
pont de s’ouvrir pour laisser passer les bateaux. C’est un véritable chef d'œuvre d'ingénierie 
technique. 
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/salle-des-machines.jpg"
              alt="Salle des machines "
              width={800}
              height={500}
            />
          </div> 
          <p>
Notre matinée fut riche en découverte et en action, nous décidons de nous arrêter manger à côté 
du Tower Bridge au Five Guys. Un bon burger nous redonne des forces pour l’après-midi. Mais 
même pendant le repas, nous étudions la carte pour chercher nos futures découvertes. 
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/velo.jpg"
              alt="velo"
              width={800}
              height={500}
            />
          </div> 
          <p>
Après cette pause bien méritée, nous poursuivons notre route, notre prochain arrêt : The Shard, 
une aiguille en français. Cette tour immense qui domine la ville, qui compte 72 étages et qui 
mesure 250 mètres de haut, est une géante de fer et de verre. 
Pour monter, nous empruntons les ascenseurs qui grimpent à une vitesse ahurissante, tellement 
vite qu’ils donnent une impression de vertige en étant enfermés dans une boîte d’acier.  
A son sommet, nous découvrons Londres sous un nouvel angle, nous pouvons observer ses toits, 
et les immeubles au loin se perdent dans la brume. Même si le paysage était bouché, nous 
perdant dans les nuages, cette expérience fut impressionnante. 
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/Vue-de-The-Shard.jpg"
              alt="Vue de The Shard"
              width={800}
              height={500}
            />
          </div> 
          <p>
Petit détail insolite, ayant besoin d’une pause pipi, découvrir les toilettes qui offrent une vue 
panoramique sur la Tamise et les immeubles de la ville est assez original.  
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/londres/Toillette-the-Shard.jpg"
              alt="Toillette the Shard"
              width={800}
              height={500}
            />
          </div> 
          <p>
Le moment où notre voyage a failli se transformer en cauchemar. Nous embarquons sur un 
bateau pour aller visiter vers Greenwich, dans l’idée de faire une balade sympathique sur la 
Tamise. Quand on s’est aperçu de l’absence de notre sac à dos avec les passeports et l’appareil 
photo contenant tous nos souvenirs à l’intérieur. La panique et le stress ressenti à ce moment
là, je nous voyais déjà courir à l’ambassade pour trouver une solution pour rentrer chez nous. Je 
tiens à souligner la gentillesse et l’efficacité du personnel à bord du bateau et sur le quai. 
M’exprimant dans un anglais approximatif sous le coup de l’émotion, ils nous déposèrent au 
prochain quai pour attendre un navire arrivant dans le sens inverse.  
L’attente sembla interminable, finalement, nous arrivons à rejoindre notre quai de départ et 
encore un grand merci au gardien de ce quai qui entre-temps avait sécurisé notre sac. C’est avec 
un gros soulagement que nous avons retrouvé toutes nos affaires. Je reconnais que mon 
compagnon aurait pu finir dans la Tamise si ça ne s'était pas bien terminé, par la suite, les 
passeports ont été sécurisés dans mon sac à main et vérifier par trois fois la présence du sac. 
Cette mésaventure derrière nous, nous changeons nos plans, la nuit commençait à tomber. 
              </p>
              <div className={styles.imageContainer}>
              <Image
              src="/images/londres/Le-sac.jpg"
              alt="Le sac et le coupable"
              width={800}
              height={500}
            />
          </div> 
        
          <p>
Nous reprenons le bateau mais cette fois-ci vers le quartier de Westminster. C’est ainsi sur la 
Tamise, que Big Ben se dévoile devant nous, cette tour élégante et majestueuse rendue dorée par 
la lumière des projecteurs, avec l’or entourant les grands cadrans indiquant l’heure à tout 
moment.
              </p>
              <div className={styles.imageContainer}>
              <Image
              src="/images/londres/Big-Ben.jpg"
              alt="Big Ben"
              width={800}
              height={500}
            />
          </div> 
        
          <p>
Nous admirons la cathédrale de Westminster, sa pierre blanche dénote dans un décor plus 
marron avec les bâtiments autour sont plus bruns. La richesse de son architecture avec une 
attention du détail sur les arches décore la façade extérieure du bâtiment. Nous ne pouvons 
malheureusement pas le visiter ce coup-ci. Ce géant de pierre, immuable à travers le temps, 
émet une sensation de sérénité malgré les bruits ambiants de la ville moderne. 
              </p>
              <div className={styles.imageContainer}>
              <Image
              src="/images/londres/cathédrale.jpg"
              alt="cathédrale de Westminster"
              width={800}
              height={500}
            />
          </div> 
        
          <p>
Nous continuons notre chemin, déambulant dans les rues de la capitale, profitant de la nuit 
tombée jusqu’à arriver à Piccadilly Circus et ses écrans géants tel le time square de New-York. 
La vie bat son plein dans cette rue avec ses commerces animés la foule est en effervescence 
pour se précipiter dans les magasins, au point que des files d'attente sont en place devant 
certains.  
            </p>
              <div className={styles.imageContainer}>
              <Image
              src="/images/londres/Piccadilly-Circus.jpg"
              alt="Piccadilly Circus"
              width={800}
              height={500}
            />
          </div> 
        
          <p>
Nous rentrons dans le magasin de M&M’s, un temple de la gourmandise au couleur de l’arc en 
ciel. On peut y retrouver les personnages emblématiques de la marque, les étagères débordent 
de produits dérivés sur le thème de l'Angleterre. Malgré le monde, on prit plaisir à se balader dans 
le magasin, parmi tous ses chocolats.
            </p>
            <div className={styles.imageContainer}>
              <Image
              src="/images/londres/M&M’s1.jpg"
              alt="M&M’s"
              width={800}
              height={500}
            />
          </div> 
          <div className={styles.imageContainer}>
              <Image
              src="/images/londres/M&M’s2.jpg"
              alt="M&M’s"
              width={800}
              height={500}
            />
          </div> 
        
          <p>
D’ailleurs, cédant à la gourmandise, un sachet de ces 
friandises en poche nous reprenons notre aventure. Afin d’éviter de perdre son guide touristique, 
mon compagnon a eu l’idée de m’offrir un joli bonnet orange vif afin d’être certain de pouvoir me 
retrouver. 
            </p>
            <div className={styles.imageContainer}>
              <Image
              src="/images/londres/bonnet-M&M’s.jpg"
              alt="bonnet M&M’s"
              width={800}
              height={500}
            />
          </div> 
        
          <p>
Après plus de 20 km parcourus dans la journée, nous regagnons tranquillement notre logement 
en prenant à manger à emporter dans l’un des restaurants de notre rue. Une bonne douche pour 
détendre les muscles fatigués, l’estomac plein, nous nous mirent au lit épuisé mais des étoiles 
plein les yeux de la journée mémorable que nous venions de passer. 
          </p>
          <h5>Moments mémorables</h5>
          <div className={styles.imageContainer}>
              <Image
              src="/images/londres/Moment-mémorable1.jpg"
              alt="Moment mémorable"
              width={800}
              height={500}
            />
          </div> 
          <div className={styles.imageContainer}>
              <Image
              src="/images/londres/Moment-mémorable2.jpg"
              alt="Moment mémorable"
              width={800}
              height={500}
            />
          </div> 
          <div className={styles.imageContainer}>
              <Image
              src="/images/londres/Moment-mémorable3.jpg"
              alt="Moment mémorable"
              width={800}
              height={500}
            />
          </div> 
          <div className={styles.imageContainer}>
              <Image
              src="/images/londres/Moment-mémorable4.jpg"
              alt="Moment mémorable"
              width={800}
              height={500}
            />
          </div> 
          <div className={styles.imageContainer}>
              <Image
              src="/images/londres/Moment-mémorable5.jpg"
              alt="Moment mémorable"
              width={800}
              height={500}
            />
          </div> 
          {/* Emplacements pour les photos du Jour 1 */}
          {/* Répéter pour chaque photo */}
        </section>

        {/* Jour 2 */}
        <section className={styles.section}>
          <h2>Jour 2</h2>
          <p>
             Nous commençons notre journée en gagnant le Hyde Park, profitant de la nature encore 
             endormie de l’hiver, les arbres encore nus, les fleurs commençant à sortir et à fleurir. Nous 
              déambulons entre les allées profitant du calme du parc sous la pluie, l’eau imprégnant peu à peu 
            nos vêtements. Nous restons sur les chemins car les flaques d’eau avaient recouvert l’herbe 
verte. 
Nous en profitons pour admirer les différentes statues, dont une particulière nous ramenant à 
l’enfance, celle de Peter Pan. Cette statue de bronze, pleine de vie, représente un enfant dansant 
et faisant de la musique, entouré par des nymphes et des petits animaux de la forêt. Elle nous 
remémore les histoires de notre enfance. 
Nous baladant le long de la Serpentine (un lac artificiel de 11 hectares) paisiblement au bord de 
l’eau calme où se reflète le ciel sombre et nuageux. Les oiseaux accompagnant notre chemin, 
nous prenons le temps de les admirer dans l’eau. 
Au loin, nous voyons le pont avec les voitures collées les unes aux autres, attendant de pouvoir 
passer. Bien loin de l’atmosphère calme de la nature encore endormie régnant sur le parc où seul 
le bruit des sabots des chevaux et de leurs cavaliers se promenant résonnent. 
Nous quittons cet havre de paix pour traverser St James Park où nous croisons notre seul écureuil 
qui eut droit à un shooting photo ! 
Nous rejoignons la foule devant Buckingham Palace afin d'assister à la relève de la garde. Le 
drapeau flottant au-dessus du palais à une signification, si c’est celui du Royaume-Uni (Union 
Jack) cela signifie que le roi est absent, si c’est le drapeau Royal (Royal Standard), le roi est 
présent au palais. 
Nous patientons calmement pendant la mise en place de la sécurité, nous voyons les gardes à 
cheval passer devant nous. Nous profitons du panorama avec Big Ben en arrière-plan et devant 
nous la statue dorée “Victoria Memorial” qui met en valeur la vie et le règne de la reine Victoria. 
Le soleil, faisant une courte apparition, se reflétant sur la statue ne l’en rend que plus 
éblouissante. 
La foule s’agitait, le brouhaha ambiant des conversations, d’un coup ce fut le silence, au loin 
retendit les premières notes de la fanfare avant de voir la garde arrivée sur la grande place 
exécutant un défilé maint et mainte fois répété. D’abord, les gardes à cheval, l’harnachement 
noir et argenté de leurs montures, le bruit des sabots frappant le sol, les gardes avec leurs long 
manteaux noirs et leurs casques argentés avec leur plumeau rouge donnent un spectacle 
impressionnant. Derrière eux, suivait la garde à pied, eux étaient vêtus de longs manteaux gris et 
des fameux bearskins, leurs bonnets à poils noirs emblématique de la garde anglaise.  
C’est une tradition à voir, un incontournable. 
Nous reprenons notre   chemin à la fin de la cérémonie, nous baladant dans les rues jusqu’à 
Trafalgar square, l’une des places les plus animées de Londres, on n’a pu apercevoir des bus 
impériaux. On peut y retrouver une colonne en son centre érigé en l’honneur de l’amiral Horacio 
Nelson, un héros de la marine britannique entouré par les quatre lions de bronze.  
On y retrouve notamment The National Gallery, un musée d’art et l’un des plus prestigieux au 
monde. Cette galerie abrite une collection exceptionnelle de peintures européennes, allant du 
XIIIe siècle à 1900. Malheureusement, nous n’aurons pas eu le temps de la visiter. 
Après avoir traversé la place, nous avons marché jusqu’à Covent Garden, un ancien marché de 
fruits et légumes couverts, transformé en galerie marchande. Cette transformation s'est réalisée 
progressivement au XIXème siècle, quand avec l’expansion de la ville le marché a perdu de son 
importance. C’est l’un de mes endroits préférés à Londres !  
Le style industriel du lieu avec ses grandes verrières, mélangé avec des plantes lui confère un 
charme fou. Ce marché plein de vie, regorge de touristes et d’artistes de rue. 
Nous nous arrêtons manger sur conseil d’amis au restaurant Din Tai Fung, un restaurant 
thaïlandais prisé auquel il vaut mieux réserver. En dehors des prix exorbitants pour des quantités 
minimales. Assez déçus de l’expérience et ayant encore faim, nous avons pris à grignoter au 
Shake Shack, un fast-food. L’ambiance plus conviviale et leurs burgers gourmands nous 
correspondaient plus. Assis sur la terrasse, nous avons pu profiter d’une cantatrice chantant 
depuis un petit balcon. 
Voulant offrir des chaussettes kitch sur le thème de l’Angleterre à mon compagnon, nous avons 
dévalisé le magasin de chaussettes Happy Socks, elles ont fait partie des souvenirs du voyage. 
Toutes les chaussettes exposées donnent une impression d’explosion de couleurs quand on 
rentre dans ce magasin. 
Nous avons également profité d’être à Covent Garden pour acheter du thé à Whittard of Chelsea, 
une petite boutique sur deux étages dont une bonne odeur de plantes séchées imprègne les lieux. 
Ils proposent une gamme diverse de thé, de café et de chocolats aux saveurs originales. Plus 
jeune, j’adorais leur thé instantané à la pomme. Le thé est un cadeau idéal pour la famille au 
retour du voyage. 
Nous avons encore fait quelques achats aux stands ambulants de Covent Garden qui offrent une 
multitude de possibilités : des magnets, des cartes postales et des petites babioles souvenirs. 
Parfait pour finir de compléter les cadeaux. 
Nous avons profité d’être sur place pour prendre des gourmandises à ramener au stand de Ben’s 
Cookies, les meilleurs biscuits de Londres. C’est une tradition dans ma famille de ramener ces 
cookies à la maison. 
L’après-midi étant bien avancé, nous avons décidé de rentrer nous poser une heure ou deux, afin 
de récupérer pour être en forme pour la soirée. 
Avant que le soleil ne se couche, nous repartons pour une ultime promenade dans le parc le plus 
connu de Londres : Hyde Park. Nous traversons le parc sous la pluie, sans nous attarder, pour 
atteindre Harrods. 
Harrods, qui est une institution londonienne, sa façade illuminée de mille feux donne le ton. Les 
marques les plus luxueuses sont présentes dans ce beau bâtiment à l’intérieur somptueux. On y 
retrouve le même faste que dans les grands magasins parisiens, avec leurs belles vitrines. Nous 
ne sommes pas restés longtemps, admirant simplement l’architecture des lieux et déambulant 
dans les allées pour admirer les articles exposés bien loin de notre budget. 
Ça y est, c’est notre dernier soir dans la capitale britannique, nous grignotons dans un pub, à 
proximité de Victoria, des ailes de poulet autour d’une pinte de bière. L’ambiance conviviale, 
festive et bruyante était au rendez-vous. 
Comment aller à Londres sans profiter de sa culture artistique ? La ville propose une multitude 
de comédies musicales et de pièces de théâtres. Ayant réservé nos billets un peu tard (seulement 
quelques jours avant), nous n’avions pas énormément de choix mais nous avons été éblouis par 
la comédie musicale Wicked. Sa première représentation date de 2006 et presque 20 ans plus 
tard, la salle était toujours comble. La richesse des décors, des costumes et la qualité des 
comédiens nous ont bluffé. En arrivant dans la salle, nous avons pu admirer le dragon suspendu 
au plafond, la carte du pays d’Oz et l’assemblage complexe de rouages autour de la scène. 
L’histoire porte sur l’amitié, la recherche de sa place dans la société, de surmonter les obstacles 
et de rester fidèle à soi-même. Les chansons de ce spectacle sont magnifiques et “Defying 
Gravity” donne de véritables frissons. Ça été un véritable plaisir d’assister à cette représentation, 
j’ai retrouvé le même émerveillement que lors de mon premier voyage à Londres où j’avais assisté 
à ce spectacle avec ma famille. C’était la parfaite conclusion de notre voyage à Londres. 
          </p>
          {/* Emplacements pour les photos du Jour 2 */}
        </section>

        {/* Le départ */}
        <section className={styles.section}>
          <h2>Le départ</h2>
          <p>
            "Nous nous sommes levés tôt, très tôt afin de prendre le métro, les seuls autres êtres vivants
            étaient les rats se baladant sur les quais, pour rejoindre la gare de Blackfriars, nous avons
            découvert une Londres paisible, endormie. Nous avons pu admirer la cathédrale Saint-Paul
            illuminée tel un phare dans la nuit. Les barrières de la gare étaient ouvertes, personne pour
            contrôler, nous avons pu monter dans le train. Par sécurité, j’avais pris les billets, en attendant le
            train sur le quai. Dormant debout, nous sommes arrivés avec de l’avance à l’aéroport pour rentrer
            chez nous, mettant fin à cette aventure londonienne. Nous étions fatigués, épuisés même, nous
            avons parcouru presque 50 km à pied pendant ce séjour. Nous nous sommes endormis avant
            même que l’avion ait décollé, rêvant peut-être encore de cette belle ville."
          </p>
        </section>

        {/* Bouton de retour en haut de page */}
        <div className={styles.backToTop}>
          <a href="#top">Retour en haut de la page</a>
        </div>
      </main>
    </div>
  );
}

export const metadata = {
  title: 'Carnets de Voyage - Londres',
  description: 'Récit de notre voyage de deux jours à Londres, à la découverte des incontournables.',
};
