"use client"
import { useState, useEffect } from "react";

export default function Sounds(){
	const urlAPI:string = "http://127.0.0.1:8000/sounds/"
	const [data, setData] = useState([])
	async function fetchData(){
		const response = await fetch(urlAPI)
		setData(await response.json())
	}
	useEffect(() => {
		fetchData()
	}, [])

	return (
		<>
			<ul>
				{data.map((item) => (
						<li key={item.id}>
							<a href={item.audio}>{item.title}</a>
						</li>
				))}
			</ul>
		</>
	)
}