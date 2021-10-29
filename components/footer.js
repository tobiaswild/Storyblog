import Link from 'next/link'
import styles from 'Styles/footer.module.css'
// icons import
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            <hr />
            <footer className={styles.footer}>
                <Link href="https://github.com/Tocoolmh58/storyblog" passHref={true}>
                    <a target="_blank" ><FaGithub /> Source Code</a>
                </Link>
            </footer>
        </>
    )
}