import Link from "next/link";
import styles from "@/app/page.module.css";

export default function NotFound() {
  return (
    <div className={styles.main}>
      <main className={styles.fullHeightContainer70}>
        <h1>Not Found</h1>
        <p>
          Dear Explorer,
          <br />
          You landed on wrong page
        </p>
        <Link href="/">Go Back</Link>
      </main>
    </div>
  );
}
