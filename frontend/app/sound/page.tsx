"use client"

import "./style.css"
import {useState, useEffect, useRef} from "react";

function ListSounds(urlAPI:string){
	const [data, setData] = useState([])
	async function fetchData(){
		const response = await fetch(urlAPI)
		setData(await response.json())
	}
	useEffect(() => {
		fetchData()
	}, [])
	return data
}

export default function SoundPage(){
	const urlAPI = "http://127.0.0.1:8000/sounds/"
	const data = ListSounds(urlAPI)
	return (
		<>
			<ul>
				{data.map((item) => (
					<li key={item.id}>
						<a
						>{item.title}</a>
					</li>
				))}
			</ul>
		</>
	)
}