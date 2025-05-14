import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BootstrapProvider from "@/app/providers/bootstrap-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Travel Design",
  description: "Luxury travel experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body className={`${poppins.variable} antialiased`}>
        <BootstrapProvider />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
