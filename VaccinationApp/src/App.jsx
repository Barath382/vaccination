import { useState } from 'react'
import Layout from "./Component/Bars/Layout";
// import Home from "./Component/Home";
import NoPage from "./Component/PageNotFound/NoPage";
import RequestMainCard from "./Component/RequestDetailsPages/RequestMainCard";
import StatusShortCard from "./Component/StatusShortCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/" element={<StatusShortCard />} />
          <Route  path="/Requeststatus/:visitor" element={<RequestMainCard />} />
          <Route exact path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
