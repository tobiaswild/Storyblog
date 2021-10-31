import Image from 'next/image'
import Layout from 'Components/layout'

export default function Home() {
    return (
        <Layout home>
            <section className="text-xl">
                <div className="flex flex-wrap flex-row justify-center">
                    <div className="border-color2 dark:border-color4 border-4 border-solid rounded-[50%] h-[208px]">
                        <Image
                            src="/images/home.png"
                            alt="Home Image"
                            width={200}
                            height={200}
                            className="rounded-[50%]"
                            style=""
                        />
                    </div>
                </div>
                <h2 className="text-3xl font-crazy">
                    Herzlich Willkommen bei Storyblog.
                </h2>
            </section>
        </Layout>
    )
}
