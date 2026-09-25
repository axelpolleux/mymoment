"use client"

import "./style.css"
import {useState, useEffect, useRef} from "react";

function ListSounds(urlAPI: string) {
	const [data, setData] = useState([])

	async function fetchData() {
		const response = await fetch(urlAPI)
		setData(await response.json())
	}

	useEffect(() => {
		fetchData()
	}, [])
	return data
}

export default function SoundPage() {
	const urlAPI = "http://127.0.0.1:8000/sounds/"
	const data = ListSounds(urlAPI)

	function PlaySound(urlAUDIO) {
		const AudioSource = new Audio(urlAUDIO)
		AudioSource.play()
	}

	async function PostSound(e:SubmitEvent){
		e.preventDefault()
		const form = e.target
		const data = new FormData(form)

		fetch (urlAPI, {
			method: "POST",
			body: data,
		})
		alert(`${data.get("title")} posted`)
	}
	return (
		<div>
			<form onSubmit={PostSound}>
				<input type={"text"} name={"title"}/>
				<input type={"text"} name={"description"}/>
				<input type={"file"} name={"audio"}/>
				<input type={"hidden"} name={"uploader"} value={1}/>
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
		</div>
	)
}