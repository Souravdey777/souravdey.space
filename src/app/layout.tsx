import { Navigation, Footer } from "@/components";
import "./globals.css";
import styles from "@/app/page.module.css";
import { poppins } from "./fonts";
// import { motion } from "framer-motion";
// import Animate from "./animation";

export const metadata = {
  title: "Sourav Dey",
  description: "Sourav Dey: Portfolio Website",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "cyan" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <strong className={styles.fixedHeader}>Sourav Dey</strong>
          <Navigation />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
