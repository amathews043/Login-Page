import { useContext } from "react"
import { SignInContext } from "./App"

export default function Signin() {

    const setPage = useContext(SignInContext)
    const click = () => {
        setPage("loading")
        setTimeout(() => {
            setPage("confirmation")
        }, 2000)
    }

    return (
        <div>
            <form className="form">
                <div>
                    <label> Email: </label>
                    <input type="text" name="email"></input>
                </div>
                <div>
                    <label> Password: </label>
                    <input type="password" name="password"></input>
                </div>
                <button className="sign-in-button" onClick={click}> Sign In</button>
            </form>
        </div>
    )
}