"use client"

import Link from "next/link"
import {useState} from "react";
import './menu.css'
import {Papicons} from "@getpapillon/papicons"

export function NavigationBar(){
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className={"navbar"}>
			<Link href="/" className={"logo"}>Homepage</Link>

			<ul className={"nav-links"}>
				<li><Link href="sound/">Sounds</Link></li>
				<li><Link href="auth/">Authentication</Link></li>
			</ul>
		</nav>
	)
}

export function FooterPart() {
    return (
        <footer className="">
            <div className="">
                <p className="">
                    Hello from Angouleme
                </p>
            </div>
            <div className="">
                <div className="">
                    <a href="/">My Moment</a> ©2025. All rights reserved.
                </div>
            </div>
        </footer>
    );
};