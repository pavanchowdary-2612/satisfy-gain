import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
