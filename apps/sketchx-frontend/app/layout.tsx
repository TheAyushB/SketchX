import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans antialiased">
        <main className="min-h-screen">
          <div className="geometric-pattern absolute inset-0 opacity-10" />
          {children}
        </main>
      </body>
    </html>
  );
}