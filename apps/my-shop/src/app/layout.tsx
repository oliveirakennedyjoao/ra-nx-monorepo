import AppBar from './components/appbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        {/* Layout UI */}
        <AppBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
