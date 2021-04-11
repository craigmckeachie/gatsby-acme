import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="mx-auto container grid grid-cols-layout grid-rows-layout">
      <Header />
      <main>{children}</main>
      <aside className="m-2 p-2 bg-gray-100 w-full h-56 flex-none rounded-xl">
        <figure className="transform -rotate-1 p-6 shadow-sm rounded-md  bg-red-200  my-2 mx-0">
          <blockquote className="text-xl text-gray-600 ">
            "We here at Acme Inc. understand that it is better to leverage
            efficiently than to benchmark extensibly."
          </blockquote>
          <figcaption>
            -Anders Reinfeld, <em>CEO</em>
          </figcaption>
        </figure>
      </aside>
      <Footer />
    </div>
  )
}
