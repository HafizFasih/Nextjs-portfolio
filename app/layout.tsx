import MyNavbar from "@/Components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-clr1 to-clr2">
      <MyNavbar />
        {children}</body>
    </html>
  );
}
