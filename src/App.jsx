import React, { useState } from "react";
import PageLayout from "./PageLayout";
import Signin from "./Signin";
import Confirmation from "./Confirmation"
import Loading from "./Loading"

const SignInContext = React.createContext();

export default function App() {

  const [page, setPage] = useState("signin");

  return (
    <>
      <PageLayout>
        <h1 className="header"> Welcome</h1>
        <p> Please log in to view the beach</p>
        {page === "signin" && (
          <SignInContext.Provider value={setPage}>
            <Signin />
          </SignInContext.Provider>

        )}
        {page === "loading" && (
          <Loading/>
        )}
        {page === "confirmation" && (
          <Confirmation />
        )}
      </PageLayout>
    </>
  )
}

export { SignInContext }
