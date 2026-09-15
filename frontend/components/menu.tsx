import Link from "next/link"

export function NavigationBar(){
	return (
		<>
			<h1>Navigation bar</h1>
			<Link href="/">Homepage</Link>
			<Link href="sound/">Sounds</Link>
		</>
	)
}

export function FooterPart(){
	return (
		<>
			<h1>Footer part</h1>
		</>
	)
}