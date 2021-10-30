import React from 'react'
import Helmet from 'react-helmet'
import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'
import Footer from './footer'
import utilStyles from 'Styles/utils.module.css'

export const siteTitle = 'Storyblog'
const name = siteTitle

export default function Layout({ children, home }) {
    return (
        <>
            <Helmet htmlAttributes={{ lang: 'de-DE' }} />
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <title>{siteTitle}</title>
            </Head>
            <Nav />
            <div class="max-w-3xl px-0 py-4 mt-8 mx-auto mb-32">
                <header class="flex flex-col items-center">
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </header>
                <main>{children}</main>
                {!home && (
                    <div class="mt-12">
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
