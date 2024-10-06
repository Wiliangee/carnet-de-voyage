// app/contact/page.js
import Header from '../components/Header';
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div>
      <Header
        title="Carnets de Voyage"
        subtitle="Contactez-nous"
        backgroundImage="/images/header-contact.jpg"
      />
      <main className={styles.mainContent}>
        <section>
          <h2>Contactez-nous</h2>
          <p>
            Pour toute question ou suggestion, n'hésitez pas à nous contacter à l'adresse suivante :
          </p>
          <p>
            <a href="mailto:contact@carnetsdevoyage.com">contact@carnetsdevoyage.com</a>
          </p>
        </section>
      </main>
    </div>
  );
}
