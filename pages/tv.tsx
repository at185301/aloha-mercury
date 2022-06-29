import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Tv.module.css";
import Tv from "../components/Tv";
const ChannelPage: NextPage = (TvProps) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Youtube as Cable</title>
                <meta
                    name="description"
                    content="generates a curated tv that appears like cable"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>youtube tv</h1>
                <Tv></Tv>
                Hello
            </main>
        </div>
    );
};
export default ChannelPage;
