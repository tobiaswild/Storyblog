import Head from 'next/head'
import Layout, { siteTitle } from 'Components/layout'
import { getAllAuthorIds, getAuthorData } from 'Lib/authors'

export default function Author({ authorData }) {
    return (
        <>
            <Head>
                <title>
                    {siteTitle} - Autor*in: {authorData.name}
                </title>
            </Head>
            <Layout author headerName={authorData.id}>
                <div className="flex flex-wrap flex-row justify-center">
                    <p className="text-3xl my-4">{authorData.name}</p>
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: authorData.contentHtml }}
                />
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllAuthorIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const authorData = await getAuthorData(params.id)
    return {
        props: {
            authorData,
        },
    }
}
