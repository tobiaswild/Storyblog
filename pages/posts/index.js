import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from 'Components/layout'
import { getSortedPostsData } from 'Lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
}

export default function Posts({ allPostsData }) {
    return (
        <>
            <Head>
                <title>{siteTitle} - Posts</title>
            </Head>
            <Layout posts headerName="posts">
                <section className="text-xl">
                    <h3>Alle Posts</h3>
                    <ul className="list-none p-0 m-0">
                        {allPostsData.map(({ id, date, title }) => (
                            <li
                                className="mt-0 mx-0 mb-5 p-1 bg-color3 bg-opacity-50 rounded-xl"
                                key={id}>
                                <Link href={`/posts/${encodeURIComponent(id)}`}>
                                    <a className="text-color6 dark:text-color4">
                                        {title}
                                    </a>
                                </Link>
                                <br />
                                {date}
                            </li>
                        ))}
                    </ul>
                </section>
            </Layout>
        </>
    )
}
