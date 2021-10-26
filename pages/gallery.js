import Image from 'next/image'
import Layout from 'Components/layout'
import utilStyles from 'Styles/utils.module.css'

export default function Gallery() {
    return (
        <Layout gallery>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Galerie</h2>
                <ul className={utilStyles.list}>
                        <li className={utilStyles.listItem}>
                            <Image src='/images/swan-gbc7681a43_640.jpg' height="250px" width='250px' />
                        </li>
                </ul>
            </section>
        </Layout>
    )
}