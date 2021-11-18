import Link from 'next/link'
import Layout from 'Components/layout'
import { FaGithub } from 'react-icons/fa'

export default function Ueber() {
    return (
        <Layout about headerName="über">
            <section className="text-xl">
                <h3>Über Storyblog</h3>
                <p>
                    Storyblog ist ein Blog für Malou. Programmiert von Tobias.
                    Viel Spaß beim lesen der Geschichten...
                </p>
                <AboutItem
                    link="https://github.com/TobiasWild/storyblog"
                    icon={<FaGithub />}>
                    Source Code
                </AboutItem>
            </section>
        </Layout>
    )
}

function AboutItem(props) {
    return (
        <Link href={props.link} passHref={true}>
            <a className="h-12 w-full flex items-center p-2" target="_blank">
                <span className="m-1">{props.icon}</span>
                {props.children}
            </a>
        </Link>
    )
}
