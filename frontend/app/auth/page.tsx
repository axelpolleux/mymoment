"use client"

import {useState} from "react"
import {Image} from "next/image"
import '../app.css'

function LoginCard() {
	return (
		<>
			<h1>Login Card</h1>
		</>
	)
}

function SignInCard() {
	return (
		<>
			<h1>Signin Card</h1>
		</>
	)
}

function MainAuth() {
	const [isUser, setIsUser] = useState(false)

	return (
		<>
			<form className="form">
				<div className="flex-column">
					<label>Email </label></div>
				<div className="inputForm">
					<input placeholder="Enter your Email" className="input" type="text"/>
				</div>

				<div className="flex-column">
					<label>Password </label></div>
				<div className="inputForm">
					<input placeholder="Enter your Password" className="input" type="password"/>
				</div>

				<div className="flex-row">
					<div>
						<input type="radio"/>
						<label>Remember me </label>
					</div>
					<span className="span">Forgot password?</span>
				</div>
				<button className="button-submit">Sign In</button>
				<p className="p">Don't have an account? <span className="span">Sign Up</span>

				</p><p className="p line">Or With</p>

				<div className="flex-row">
					<button className="btn google">
						Google
					</button>
					<button className="btn apple">
						Apple
					</button>
				</div>
			</form>
		</>
	)
}

export default MainAuth