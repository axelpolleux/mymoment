"use client";
 import {useEffect, useState} from "react";
import "./app.css"

export default function Home() {
    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos/")
        setData(await response.json());
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <main>
        </main>
    );
}