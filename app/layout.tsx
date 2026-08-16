import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'StyleHive - Fashion Network',
  description: 'Creative network for fashion professionals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f3f4f6' }}>
        <Navbar />
        {/* Full-bleed fluid wrapper without artificial max-width constraints */}
        <main className="container-fluid px-3 px-md-4 px-xl-5 py-4">
          {children}
        </main>
      </body>
    </html>
  );
}