import Image from 'next/image'
import Layout from 'Components/layout'


export default function Home() {
    return (
        <Layout home>
            <section
                className="text-xl">
                <div className="flex flex-wrap flex-row justify-center">
                    <Image
                        src="/images/home.png"
                        alt="Home Image"
                        width={200}
                        height={200}
                        className="rounded-[50%]"
                    />
                </div>
                <h2 className="text-3xl font-crazy">
                    Herzlich Willkommen bei Storyblog.
                </h2>
            </section>
        </Layout>
    )
}
