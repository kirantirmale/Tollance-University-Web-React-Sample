import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Index } from './pages/Index'
import '../src/styles/style.css'
import { Header } from './components/common/Header'
import { Research } from './pages/Research'
import { Study } from './pages/Study'
import { Transfer } from './pages/Transfer'
import { Leadership } from './pages/Leadership'
import { Footer } from './components/common/Footer'
import { DetailsPages } from './components/common/DetailsPages'
import { Transcript } from './pages/Transcript'
import { Admission } from './pages/Admission'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Index />}></Route>
        <Route path="/research" element={<Research />}></Route>
        {/* <Route path="/study" element={<Study />}></Route> */}
        <Route path="/transfer" element={<Transfer />}></Route>
        <Route path="/transcript" element={<Transcript />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
        <Route path="/leadership" element={<Leadership />}></Route>
        <Route path="/details-page" element={<DetailsPages />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
