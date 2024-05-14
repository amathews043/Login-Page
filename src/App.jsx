import React, { useState } from "react";
import PageLayout from "./PageLayout";
import Signin from "./Signin";
import Confirmation from "./Confirmation"
import Loading from "./Loading"
import Page from "./Page";

const PageContext = React.createContext();

export default function App() {

  const [page, setPage] = useState("signin");
  const pageContext = {
    page,
    setPage,
  }

  return (
    <>
      <PageContext.Provider value={pageContext}>
        <Page />
      </PageContext.Provider>
    </>
  )
}

export { PageContext }
