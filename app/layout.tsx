import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'StyleHive - Fashion Network',
  description: 'Connect with fashion designers, stylists, and creatives.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}