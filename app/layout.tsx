import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mood4Flix',
  description: 'Find a movie based on your mood.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
