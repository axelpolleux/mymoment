"use client"

import {useState} from "react";

function LoginCard(){
	return (
		<>
			<h1>Login Card</h1>
		</>
	)
}

function SignInCard(){
	return (
		<>
			<h1>Sign In Card</h1>
		</>
	)
}

function MainAuth(){
	const [test, setTest] = useState()
	if (test){
		return <LoginCard/>
	} else {
		return <SignInCard/>
	}
}

export default MainAuth