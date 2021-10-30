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
            <section>
                <h2
                    className={utilStyles.headingLg}
                    class="text-2xl font-crazy">
                    Alle Autoren
                </h2>
                <div class="flex flex-row flex-wrap">
                    {allAuthorsData.map(({ id, name, preview }) => (
                        <div class="w-full sm:w-1/1 md:w-1/2">
                            <div
                                class="rounded overflow-hidden shadow-lg mr-4 mb-4"
                                key={id}>
                                <img
                                    class="w-full max-h-60"
                                    src={`/images/${encodeURIComponent(
                                        id
                                    )}.png`}
                                    alt="Autor*innen Foto"
                                />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">
                                        <Link
                                            href={`/authors/${encodeURIComponent(
                                                id
                                            )}`}>
                                            <a className={utilStyles.heading}>
                                                {name}
                                            </a>
                                        </Link>
                                    </div>
                                    <p class="text-gray-700 text-base">
                                        {preview}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}
