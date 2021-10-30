import Image from 'next/image'
import Layout from 'Components/layout'
import utilStyles from 'Styles/utils.module.css'

export default function Home() {
    return (
        <Layout home>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <div className={utilStyles.wrapper}>
                    <Image
                        src="/images/home.png"
                        alt="Home Image"
                        width={200}
                        height={200}
                        className={utilStyles.bigImage}
                    />
                </div>
                <h2 className={utilStyles.headingLgNoFont}>
                    Herzlich Willkommen bei Storyblog.
                </h2>
                <p>In der navigation oben rechts findest du Alles.</p>
                <br />
                <p>Hier kommt der Text rein</p>
                <br />
                <h6>Hier kommen bald noch die neusten Posts hin.</h6>
            </section>
        </Layout>
    )
}
