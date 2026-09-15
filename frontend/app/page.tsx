"use client";
import {useEffect, useState} from "react"
import {Papicons} from "@getpapillon/papicons"
import Image from "next/image"
import Link from "next/link"
import "./app.css"

export default function Home() {
    return (
        <main>
           <div className={"main-slide"}>
               <div className={"left-part"}>
                   <h1>Hello world</h1>
                   <p></p>
               </div>
               <div className={"right-part"}>
                   <Image
                       src="/images/saxophone.jpg"
                       width={1000}
                       height={1000}
                       className={"image-background"}
                       alt=""
                   />
               </div>
           </div>
        </main>
    );
}