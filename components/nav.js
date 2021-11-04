import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaHome, FaUser, FaBook, FaInfoCircle } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 h-10 w-screen bg-color6 z-50">
            <NavItem icon={<FaBars />}>
                <DropDownMenu />
            </NavItem>
        </nav>
    )
}

function NavItem(props) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Link href="">
                <a
                    onClick={() => setOpen(!open)}
                    onHover={() => setOpen(!open)}
                    className="flex justify-center items-center m-[2px] w-9 h-9 text-white text-xl">
                    {props.icon}
                </a>
            </Link>
            {open && props.children}
        </>
    )
}

function DropDownMenu() {
    function DropDownItem(props) {
        return (
            <Link href={props.link} passHref={true}>
                <a className="text-white h-12 w-full flex items-center p-2">
                    <span className="m-1">{props.icon}</span>
                    {props.children}
                </a>
            </Link>
        )
    }

    return (
        <div className="absolute top-10 left-0 w-auto min-w-[150px] overflow-hidden bg-color6">
            <DropDownItem link="/" icon={<FaHome />}>
                Startseite
            </DropDownItem>
            <DropDownItem link="/autoren" icon={<FaUser />}>
                Autoren
            </DropDownItem>
            <DropDownItem link="/posts" icon={<FaBook />}>
                Posts
            </DropDownItem>
            <DropDownItem link="/ueber" icon={<FaInfoCircle />}>
                Über
            </DropDownItem>
        </div>
    )
}
