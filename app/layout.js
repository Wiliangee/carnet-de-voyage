// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Carnets de Voyage',
  description: 'Blog de voyage de Chloé et Marc',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}

      <link rel="icon" href="/images/logo.png"/>
      </body>
    </html>
  );
}
