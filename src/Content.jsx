import { Projects } from "./Projects"
import { About } from "./About"
import { Contact } from "./Contact"
import { Routes, Route } from "react-router-dom"

export function Content() {
  return (
    <main>
      <Routes>
        <Route path="/" element={< Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={< Contact />} />
      </Routes>
    </main>
  )
}