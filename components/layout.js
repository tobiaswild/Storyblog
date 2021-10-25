import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from 'Styles/utils.module.css'
import { FaGithub } from 'react-icons/fa'

export const siteTitle = 'Storyblog'
const name = siteTitle

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{siteTitle}</title>
            </Head>
            <header className={styles.header}>
                <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Zurück zur Startseite</a>
                    </Link>
                </div>
            )}
            <hr />
            <footer className={styles.footer}>
                <Link href="https://github.com/Tocoolmh58/nextjs-blog" passHref={true}>
                    <a target="_blank" ><FaGithub /> Source Code</a>
                </Link>
            </footer>
        </div>
    )
}