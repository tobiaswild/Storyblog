import Link from 'next/link'
import Image from 'next/image'
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
                <div className="flex flex-row flex-wrap justify-center gap-3">
                    {allAuthorsData.map(({ id, name, preview }) => (
                        <div className="max-w-lg sm:w-1/1 md:w-[49%]" key={id}>
                            <div className="rounded overflow-hidden shadow-lg sm:w-[95vw] w-auto m-auto pt-[2.5%] p-4 bg-color3 bg-opacity-50">
                                <Image
                                    className="max-h-60"
                                    src={`/images/${encodeURIComponent(
                                        id
                                    )}.png`}
                                    alt="Autor*innen Foto"
                                    width={1000}
                                    height={750}
                                />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">
                                        <Link
                                            href={`/authors/${encodeURIComponent(
                                                id
                                            )}`}
                                        >
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
