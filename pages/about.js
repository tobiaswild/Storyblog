import Link from 'next/link'
import Layout from 'Components/layout'
import { FaGithub } from 'react-icons/fa'

export default function About() {
    return (
        <Layout about>
            <section className="text-xl">
                <h2 className="text-3xl font-crazy my-4">Über Storyblog</h2>
                <p>
                    Storyblog ist ein Blog für Malou. Programmiert von Tobias.
                    Viel Spaß beim lesen der Geschichten...
                </p>
                <Link
                    href="https://github.com/TobiasWild/storyblog"
                    passHref={true}
                >
                    <a
                        className="h-12 w-full flex items-center p-2"
                        target="_blank"
                    >
                        <span className="m-1">
                            <FaGithub />
                        </span>
                        Source Code
                    </a>
                </Link>
            </section>
        </Layout>
    )
}
