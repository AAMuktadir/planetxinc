import { Inter } from "next/font/google";
import "./globals.css";
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
