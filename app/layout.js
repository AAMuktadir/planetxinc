import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/global/header";
import Footer from "@/Components/global/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Planet X Inc Ltd.",
  description: "We create digital solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
