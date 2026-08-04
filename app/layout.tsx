import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'StyleHive - Fashion Network',
  description: 'Connect, share portfolios, and find opportunities in fashion.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-light d-flex flex-column min-vh-100">
        <Navbar />
        <main className="container-fluid px-lg-5 py-4 flex-grow-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}