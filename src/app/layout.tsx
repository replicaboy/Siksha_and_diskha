import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Siksha And Diksha Classes - Quality Education in Banauli, Darbhanga',
  description: 'Leading coaching center in Banauli, Darbhanga offering Classes 1-10 coaching for CBSE, ICSE, Bihar Board, English courses, Spoken English, and Polytechnic preparation.',
  keywords: 'coaching center Darbhanga, Banauli coaching, CBSE coaching, ICSE coaching, Bihar Board, spoken English, polytechnic coaching',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
