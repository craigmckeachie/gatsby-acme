import React from "react"
import Layout from "../components/layout"
import { PageTitle } from "../components/page-title"

export default function Home() {
  return (
    <Layout>
      <PageTitle>Home</PageTitle>
      <img src="https://source.unsplash.com/random/400x200" alt="home" />
      <p className="py-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nobis
        quasi nihil quisquam accusamus pariatur excepturi rerum saepe ullam,
        officia explicabo qui, eveniet dolorem beatae repellendus molestiae
        assumenda atque ipsam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Iure quae, provident consequuntur commodi soluta sequi
        optio voluptatem. Omnis optio amet aliquid assumenda illum hic error,
        ipsa repellat voluptatibus alias ea!
      </p>
    </Layout>
  )
}
