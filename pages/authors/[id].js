import Image from 'next/image'
import utilStyles from 'Styles/utils.module.css'
import Layout from 'Components/layout'
import { getAllAuthorIds, getAuthorData } from 'Lib/authors'

export default function Author({ authorData }) {
    return (
        <>
            <Layout author>
                <div className={utilStyles.wrapper}>
                    <Image
                        src={`/images/${encodeURIComponent(authorData.id)}.png`}
                        alt="Picture of the author"
                        width={200}
                        height={200}
                        className={utilStyles.bigImage}
                    />
                </div>
                <div className={utilStyles.wrapper}>
                    <p className={utilStyles.headingLgNoFont}>
                        {authorData.name}
                    </p>
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
