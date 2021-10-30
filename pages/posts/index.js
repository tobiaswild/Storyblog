import Link from 'next/link'
import Layout from 'Components/layout'
import utilStyles from 'Styles/utils.module.css'
import { getSortedPostsData } from 'Lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout posts>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}><strong>Alle Posts</strong></h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${encodeURIComponent(id)}`}>
                                <a className={utilStyles.heading}>{title}</a>
                            </Link>
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}