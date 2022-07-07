import type { NextPage } from "next";
import Head from "next/head";
import styles from "../components/SideBar/Styles.module.css";
import MercuryLeftRail from "../components/SideBar/MercuryLeftRail";
import MercuryGlobalHeader from "../components/SideBar/MercuryGlobalHeader";

const Mercury: NextPage = () => {
    return (
        <>
            <Head>
                <title>mercury practice</title>
                <meta name="description" content="mercury practice" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.header_nav_shared_props}>
                <header>
                    <div className={styles.global_header_container}>
                        <MercuryGlobalHeader />
                    </div>
                </header>
                <nav className={styles.mercury_left_rail_container}>
                    <MercuryLeftRail />
                </nav>
            </div>
            <main className={styles.main}>
                <div className={styles.mercury_main_content_container}>
                    other content goes here?
                </div>
            </main>
        </>
    );
};
export default Mercury;
