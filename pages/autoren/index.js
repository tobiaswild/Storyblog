import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from 'Components/layout'
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
        <>
            <Head>
                <title>{siteTitle} - Autor*innen</title>
            </Head>
            <Layout authors headerName="autoren">
                <section>
                    <h3>Alle Autoren</h3>
                    <div className="flex flex-row flex-wrap justify-center gap-3">
                        {allAuthorsData.map(({ id, name, preview }) => (
                            <div
                                className="max-w-lg sm:w-[92vw] w-[49%]"
                                key={id}>
                                <div className="rounded overflow-hidden shadow-lg m-auto p-4 bg-color3 bg-opacity-50">
                                    <Link
                                        href={`/autoren/${encodeURIComponent(
                                            id
                                        )}`}>
                                        <a>
                                            <Image
                                                className="max-h-60"
                                                src={`/images/${encodeURIComponent(
                                                    id
                                                )}.png`}
                                                alt="Autor*innen Foto"
                                                width={1000}
                                                height={750}
                                            />
                                        </a>
                                    </Link>

                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">
                                            <Link
                                                href={`/autoren/${encodeURIComponent(
                                                    id
                                                )}`}>
                                                <a className="dark:text-white">
                                                    {name}
                                                </a>
                                            </Link>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-base">
                                            {preview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Layout>
        </>
    )
}
