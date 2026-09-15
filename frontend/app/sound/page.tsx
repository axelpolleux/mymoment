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
	function PlaySound(urlAUDIO){
		const AudioSource = new Audio(urlAUDIO)
		AudioSource.play()
	}
	function AddSound({title:string, file})
	return (
		<>
			<form onSubmit={}>
				<input type={"text"}/>
				<input type={"file"}/>
				<button type={"submit"}>Envoyer</button>
			</form>
			<ul className={"sound-list"}>
				{data.map((item) => (
					<li key={item.id}>
						<a
							className={"sound-card"}
							onClick={() => PlaySound(item.audio)}
						>
							<p>{item.title}</p>
						</a>
					</li>
				))}
			</ul>
		</>
	)
}