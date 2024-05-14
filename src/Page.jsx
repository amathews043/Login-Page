import { useContext } from "react"
import { PageContext } from "./App"
import Signin from "./Signin"
import Loading from "./Loading"
import Confirmation from "./Confirmation"
import PageLayout from "./PageLayout"

export default function Page() {
    const pageContext = useContext(PageContext)
    return (
        <>
            <PageLayout>
                <h1 className="header"> Welcome</h1>
                <p> Please log in to view the beach</p>
                {pageContext.page === "signin" && (
                    <Signin />

                )}
                {pageContext.page === "loading" && (
                    <Loading />
                )}
                {pageContext.page === "confirmation" && (
                    <Confirmation />
                )}
            </PageLayout>
        </>
    )
}