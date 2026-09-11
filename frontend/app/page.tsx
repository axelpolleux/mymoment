"use client";
 import {useEffect, useState} from "react";
 import Link from "next/link"
import "./app.css"

export default function Home() {
    return (
        <main>
            <Link href="/sound">Sounds</Link>
        </main>
    );
}