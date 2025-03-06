import "./globals.css";

import Header from "./components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </div>
  );
}
