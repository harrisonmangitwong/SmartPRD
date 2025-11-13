import './globals.css';

export const metadata = {
  title: 'SmartPRD',
  description: 'AI Meeting Summary Assistant for product requirements.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
