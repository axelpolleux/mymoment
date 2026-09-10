"use client"
import {useState} from "react";
import "./app.css"

export default async function Home() {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos/")
    const data = await response.json()

    return (
        <main>
            <ul>{data.map((photo) => (
                <li key={photo.id}>{photo.title}</li>
            ))}</ul>
        </main>
    );
}