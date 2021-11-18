import Head from 'next/head'
import Layout, { siteTitle } from 'Components/layout'

export default function Home() {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Layout home headerName="home">
                <section className="text-xl">
                    <h3>
                        Herzlich Willkommen bei Storyblog.
                    </h3>
                </section>
            </Layout>
        </>
    )
}
