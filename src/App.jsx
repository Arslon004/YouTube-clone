import { BrowserRouter, Route, Routes } from "react-router-dom"


import HomePage from "./pages/home/HomePage"
import VideoPage from "./pages/video/VideoPage"
import Layout from "./components/layout";

function App() {

  return (
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Layout />} >
         <Route path="/" element={<HomePage/>}/>
         <Route path="/video/:catogoryId/:videoId" element={<VideoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
