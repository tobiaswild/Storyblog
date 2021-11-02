import Image from 'next/image'

import { siteTitle } from './layout'

export default function Header() {
    return (
        <header className="flex flex-col items-center">
            <h1 className="text-6xl font-crazy my-4">{siteTitle}</h1>
            <div className="flex flex-wrap flex-row justify-center">
                <div className="border-color2 dark:border-color4 border-4 border-solid rounded-[50%] h-[208px]">
                    <Image
                        src="/images/home.png"
                        alt="Home Image"
                        width={200}
                        height={200}
                        className="rounded-[50%]"
                    />
                </div>
            </div>
        </header>
    )
}
