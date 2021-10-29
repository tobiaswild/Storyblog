import Head from 'next/head'
import Layout from 'Components/layout'
import { getAllAuthorIds, getAuthorData } from 'Lib/authors'

export default function Author({ authorData }) {
    return (
        <>
            <Head>
                <title>{authorData.name}</title>
            </Head>
            <Layout>
                Name: {authorData.name}
                <br />
                <div dangerouslySetInnerHTML={{ __html: authorData.contentHtml }} />
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllAuthorIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const authorData = await getAuthorData(params.id);
    return {
        props: {
            authorData
        }
    }
}