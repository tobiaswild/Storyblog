import React, { useState } from 'react'
import Link from 'next/link'
import styles from 'Styles/nav.module.css'
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <NavItem icon={<FaBars />}>
                <DropDownMenu />
            </NavItem>
        </nav>
    )
}

function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Link href="">
                <a
                    onClick={() => setOpen(!open)}
                    onHover={() => setOpen(!open)}
                    className={styles.navItem}
                >
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
                <a className={styles.dropdownItem}>
                    <span className={styles.dropdownIcon}>{props.icon}</span>
                    {props.children}
                </a>
            </ Link>
        )
    }

    return (
        <div className={styles.dropdown}>
            <DropDownItem link="/authors/malou">
                Malou
            </DropDownItem>
        </div>
    )
}
