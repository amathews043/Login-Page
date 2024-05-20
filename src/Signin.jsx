import { useContext } from "react"
import { PageContext } from "./App"

export default function Signin() {

    const pageContext = useContext(PageContext)
    const click = () => {
        pageContext.setPage("loading")
        setTimeout(() => {
            pageContext.setPage("confirmation")
        }, 2000)
    }

    return (
        <div>
            <p> Please log in to view the beach</p>
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