import { siteTitle } from './layout'

export default function Header({ name }) {
    return (
        <header className="flex flex-col items-center">
            <h1>{siteTitle}</h1>
            <h2>{name}</h2>
        </header>
    )
}
