import Image from 'next/image'
import Layout from 'Components/layout'
import { getAllAuthorIds, getAuthorData } from 'Lib/authors'

export default function Author({ authorData }) {
    return (
        <>
            <Layout author>
                <div className="flex flex-wrap flex-row justify-center">
                    <Image
                        src={`/images/${encodeURIComponent(authorData.id)}.png`}
                        alt="Picture of the author"
                        width={200}
                        height={200}
                        className="rounded-[50%]"
                    />
                </div>
                <div className="flex flex-wrap flex-row justify-center">
                    <p className="text-3xl my-4">{authorData.name}</p>
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: authorData.contentHtml }}
                />
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllAuthorIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const authorData = await getAuthorData(params.id)
    return {
        props: {
            authorData,
        },
    }
}
