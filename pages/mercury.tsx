import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Mercury.module.css";
const Mercury: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>mercury practice</title>
                <meta name="description" content="mercury practice" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Mercury</h1>
            </main>
        </div>
    );
};
export default Mercury;
