"use client"

import Link from "next/link"
import {useState} from "react";
import './menu.css'
import {Papicons} from "@getpapillon/papicons"

export function NavigationBar(){
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className={"navbar"}>
			<div className={"logo"}>My Moment</div>

			<ul className={"nav-links"}>
				<li><Link href="/">Homepage</Link></li>
				<li><Link href="sound/">Sounds</Link></li>
				<li><Link href="auth/">Authentication</Link></li>
			</ul>
		</nav>
	)
}

export function FooterPart(){
	return (
		<>
			<h1>Footer part</h1>
		</>
	)
}