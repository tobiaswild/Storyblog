import React from 'react'
import Helmet from 'react-helmet'
import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'
import Footer from './footer'

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
            <div className="min-h-screen h-full w-full dark:bg-dark dark:text-white">
                <Nav />
                <div className="max-w-3xl px-0 py-4 mt-8 mx-auto">
                    <header className="flex flex-col items-center">
                        <h1 className="text-6xl font-crazy my-4">{name}</h1>
                    </header>
                    <main>{children}</main>
                    {!home && (
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
