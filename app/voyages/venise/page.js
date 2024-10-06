// app/voyages/venise/page.js
import Header from '../../components/Header';
import styles from './venise.module.css';

export default function VenisePage() {
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
            Plongez avec nous dans les ruelles pittoresques et les canaux enchanteurs de Venise.
          </p>
          {/* Ajoute ton contenu ici */}
        </section>
      </main>
    </div>
  );
}
