"use client"

import "./style.css"
import '../app.css'
import {useState, useEffect, useRef} from "react";
import {Trash} from "@getpapillon/papicons"

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

	async function PostSound(e: SubmitEvent) {
		e.preventDefault()
		const form = e.target
		const data = new FormData(form)

		fetch(urlAPI, {
			method: "POST",
			body: data,
		})
		alert(`${data.get("title")} posted`)
	}

	async function DeleteSound(item) {
		await fetch(`${urlAPI}${item.id}/`, {method: 'DELETE'})
	}

	return (
		<div>
			<form className="add-form form m-15" onSubmit={PostSound}>
				<div className="flex-column">
					<label>Title </label></div>
				<div className="inputForm">
					<input placeholder="Enter your title" className="input" type="text" name={"title"}/>
				</div>

				<div className="flex-column">
					<label>Description </label></div>
				<div className="inputForm">
					<input placeholder="Enter your description" className="input" type="text" name={"description"}/>
				</div>
				<div className="flex-column">
					<label>File </label></div>
				<div className="inputForm">
					<input placeholder="Upload audio file" className="input" type="file" name={"audio"}/>
				</div>
				<input value={1} type={"hidden"} name={"uploader"}/>
				<button className="button-submit">Send</button>
			</form>
			<ul className={"sound-list"}>
				{data.map((item) => (
					<li key={item.id}>
						<button
							onClick={() => PlaySound(item.audio)}
						>
							<p>{item.title}</p>
						</button>
						<a onClick={() => DeleteSound(item)} className={"cursor-pointer"}><Trash/></a>
					</li>
				))}
			</ul>
		</div>
	)
}