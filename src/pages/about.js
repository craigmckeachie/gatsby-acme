import React from "react"
import Layout from "../components/layout"
import { PageTitle } from "../components/page-title"
import aboutPhoto from "../images/about-photo.png"

export default function About() {
  return (
    <Layout>
      <PageTitle>About</PageTitle>
      <img
        className="rounded-md shadow-md"
        style={{ width: "600px", height: "300px" }}
        src={aboutPhoto}
        alt="corporate building"
      />
      <p className="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, possimus!
        Nam voluptatibus a dolore expedita atque corporis delectus! Reiciendis,
        magni culpa quidem esse facilis porro recusandae officia tempore aliquid
        odio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur, sapiente inventore ullam voluptates neque eveniet corporis
        laboriosam quidem at? Fugit quod eligendi reprehenderit recusandae
        repudiandae voluptatem in iusto consequatur magni. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Impedit laboriosam, tempore nisi eius
        perspiciatis reprehenderit maxime temporibus corrupti eum obcaecati
        incidunt, blanditiis ea? Quod suscipit perspiciatis dolore consectetur
        reiciendis dolores!
      </p>
    </Layout>
  )
}
