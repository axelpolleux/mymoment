"use client"

// import './page.css'
import {useEffect, useState} from "react";

export default function Sounds(){
	const [data, setData] = useState([])

	async function fetchData(){
		const response = await fetch("http://127.0.0.1:8000/sounds/")
		setData(await response.json())
	}

	useEffect(() => {
		fetchData()
	}, [])
	return (
		<>
			<h1>List of the sounds</h1>
			<ul>
				{data.map((item, index) => (
					<li key={index}>{item.title}</li>
				))}
			</ul>
		</>
	)
}