import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Clients from "./pages/clients/Clients"
import Header from "./components/organisms/Header"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </main>
    </div>
  )
}
