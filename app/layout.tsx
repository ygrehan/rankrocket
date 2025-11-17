import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RankRocket – AI SEO Optimizer',
  description: 'One-click AI that beats #1 Google rankings',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
