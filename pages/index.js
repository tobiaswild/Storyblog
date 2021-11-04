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
                    <h2 className="text-3xl font-crazy">
                        Herzlich Willkommen bei Storyblog.
                    </h2>
                </section>
            </Layout>
        </>
    )
}
