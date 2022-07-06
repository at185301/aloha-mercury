import type { NextPage } from "next";
import Head from "next/head";
import MercuryLeftRail, { MercuryGlobalHeader } from "../components/Mercury";
import styles from "../styles/Mercury.module.css";

const Mercury: NextPage = () => {
    return (
        <>
            <Head>
                <title>mercury practice</title>
                <meta name="description" content="mercury practice" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.mercury_left_rail_container}>
                    <MercuryLeftRail />
                </div>
                <MercuryGlobalHeader />
                <div className={styles.mercury_main_content_container}>
                    other content goes here?
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                    <div>empty</div>
                </div>
            </main>
        </>
    );
};
export default Mercury;
