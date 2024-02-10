'use client';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const handleButtonClick = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    window.location.href = `/${name}`;
  }

  return (
    <main className={styles.main}>
      <h1>Type your valentine below</h1>
      <input type="text" id="name" name="name" />
      <button className={styles.button} onClick={handleButtonClick}>Submit</button>
    </main>
  );
}
