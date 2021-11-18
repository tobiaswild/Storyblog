import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from 'Components/layout'
import { getAllPostIds, getPostData } from 'Lib/posts'

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>
                    {siteTitle} - &quot;{postData.title}&quot; von{' '}
                    {postData.author}
                </title>
            </Head>
            <Layout post>
                <p className="text-3xl font-bold m-0">{postData.title}</p>
                <p className="text-xl font-light">{postData.preview}</p>
                <p>
                    von:{' '}
                    <Link
                        href={`/autoren/${encodeURIComponent(
                            postData.author
                        )}`}>
                        {postData.author}
                    </Link>
                    <span className="text-sm font-thin ml-2">{postData.date}</span>
                </p>

                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    return {
        props: {
            postData,
        },
    }
}
