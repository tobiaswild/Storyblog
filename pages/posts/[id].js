import Head from 'next/head'
import Link from 'next/link'
import Layout from 'Components/layout'
import { getAllPostIds, getPostData } from 'Lib/posts'

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>Post | {postData.title}</title>
                <meta author={postData.author} />
            </Head>
            <Layout>
                Titel: {postData.title}
                <br />
                Autor: <Link href={`/authors/${encodeURIComponent(postData.author.toLowerCase())}`}>{postData.author}</Link>
                <br />
                Datum: {postData.date}
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}