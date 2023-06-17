import { Navigation, Footer } from "@/components";
import "./globals.css";
import styles from "@/app/page.module.css";
import { poppins } from "./fonts";
import Script from "next/script";
// import { motion } from "framer-motion";
// import Animate from "./animation";

export const metadata = {
  title: "Sourav Dey",
  description: "Sourav Dey: Digital Space",
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
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BJ96LSKFFB"
        strategy="lazyOnload"
      />
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
