// react import
import React from "react";
import Helmet from 'react-helmet'
// next import
import Head from 'next/head'
import Link from 'next/link'
// components import
import Nav from './nav'
import Footer from './footer'
// styles import
import styles from './layout.module.css'
import utilStyles from 'Styles/utils.module.css'

export const siteTitle = 'Storyblog'
const name = siteTitle

export default function Layout({ children, home }) {
    return (
        <>
            <Helmet htmlAttributes={{ lang: 'de-DE' }} />
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{siteTitle}</title>
            </Head>
            <Nav />
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
                </header>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Zurück zur Startseite</a>
                        </Link>
                    </div>
                )}
                <Footer />
            </div>
        </>
    )
}
