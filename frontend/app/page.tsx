"use client"
import {useState} from "react";

export default function Home() {
    const [data, setData] = useState("String de plage");
    return (
        <main>
            <p>{data}</p>
        </main>
    );
}