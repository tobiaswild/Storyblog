import Link from 'next/link'
import Layout from 'Components/layout'
import utilStyles from 'Styles/utils.module.css'
import { getSortedAuthorsData } from 'Lib/authors'

export async function getStaticProps() {
    const allAuthorsData = getSortedAuthorsData()
    return {
        props: {
            allAuthorsData,
        },
    }
}

export default function Home({ allAuthorsData }) {
    return (
        <Layout posts>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>
                    <strong>Alle Autoren</strong>
                </h2>
                <ul className={utilStyles.list}>
                    {allAuthorsData.map(({ id, name }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link
                                href={`/authors/${encodeURIComponent(
                                    id.toLowerCase()
                                )}`}>
                                <a className={utilStyles.heading}>{name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
