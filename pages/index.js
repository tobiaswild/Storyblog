import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from 'Components/layout'
import utilStyles from 'Styles/utils.module.css'
import { getSortedPostsData } from 'Lib/posts'
import { getSortedAuthorsData } from 'Lib/authors'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    const allAuthorsData = getSortedAuthorsData()
    return {
        props: {
            allAuthorsData,
            allPostsData
        }
    }
}

export default function Home({ allPostsData, allAuthorsData }) {
    return (
        <Layout home>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Autoren</h2>
                <ul className={utilStyles.list}>
                    {allAuthorsData.map(({ name }) => (
                        <li className={utilStyles.listItem} key={name}>
                            <Link href={`/authors/${encodeURIComponent(name.toLowerCase())}`}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Posts</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${encodeURIComponent(id.toLowerCase())}`}>{title}</Link>
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}