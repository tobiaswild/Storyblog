import Link from 'next/link'
import Layout from 'Components/layout'
import utilStyles from 'Styles/utils.module.css'
import { FaGithub } from 'react-icons/fa'

export default function About() {
    return (
        <Layout about>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Über Storyblog</h2>
                <p>
                    Storyblog ist ein Blog für Malou. Programmiert von Tobias.
                    Viel Spaß beim lesen der Geschichten...
                </p>
                <Link href="https://github.com/TobiasWild/storyblog">
                    <a target="_blank">
                        <FaGithub />
                        Source Code
                    </a>
                </Link>
            </section>
        </Layout>
    )
}
