import React from 'react'
import Helmet from 'react-helmet'
import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'
import Header from './header'
import Footer from './footer'

export const siteTitle = 'Storyblog'

export default function Layout({ children, home, author, post, headerName }) {
    return (
        <>
            <Helmet htmlAttributes={{ lang: 'de-DE' }} />
            <Head>
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <div className="cursor-default min-h-screen h-full w-full dark:bg-dark dark:text-white">
                <Nav />
                <div className="max-w-3xl sm:w-[95vw] md:w-[95vw] px-0 py-4 mt-8 mx-auto">
                    <Header name={headerName} />
                    <main>{children}</main>
                    {author && (
                        <div className="mt-12">
                            <Link href="/autoren">
                                <a>← Zurück zur Übersicht alles Autoren</a>
                            </Link>
                        </div>
                    )}
                    {post && (
                        <div className="mt-12">
                            <Link href="/posts">
                                <a>← Zurück zur Übersicht alles Posts</a>
                            </Link>
                        </div>
                    )}
                    {!home && !post && !author && (
                        <div className="mt-12">
                            <Link href="/">
                                <a>← Zurück zur Startseite</a>
                            </Link>
                        </div>
                    )}
                    <Footer />
                </div>
            </div>
        </>
    )
}
