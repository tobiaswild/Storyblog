import Link from 'next/link'
import Layout from 'Components/layout'

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
                <h2 className="text-3xl font-crazy my-4">Alle Autoren</h2>
                <div className="flex flex-row flex-wrap gap-3">
                    {allAuthorsData.map(({ id, name, preview }) => (
                        <div className="sm:w-1/1 md:w-[49%]">
                            <div className="rounded overflow-hidden shadow-lg">
                                <img
                                    className="w-full max-h-60"
                                    src={`/images/${encodeURIComponent(
                                        id
                                    )}.png`}
                                    alt="Autor*innen Foto"
                                />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">
                                        <Link
                                            href={`/authors/${encodeURIComponent(
                                                id
                                            )}`}>
                                            <a className="text-color6">
                                                {name}
                                            </a>
                                        </Link>
                                    </div>
                                    <p className="text-gray-700 text-base">
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
