import { Link } from "gatsby"

import React from "react"
import Layout from "../components/Layout/Layout"
import HorizontalCard from "../components/HorizontalCard/HorizontalCard"
import VerticalCard from "../components/VerticalCard/VerticalCard"
import Footer from "../components/Footer/Footer"
import "./styles.css"
import { useStaticQuery, graphql } from "gatsby"
// import "bootstrap/dist/css/bootstrap.min.css"

const query = graphql`
  {
    allStrapiBlog(sort: { fields: Published, order: DESC }) {
      nodes {
        Title
        Description
        minutes
        id
        Content
      }
    }
  }
`

const IndexPage = () => {

  const {
    allStrapiBlog: { nodes: blogs },
  } = useStaticQuery(query)

  let firstBlog = blogs?.slice(0, 1)
  let otherBlogs = blogs?.slice(1, 7)

  let style = {
    horizontalCardwrapper: {
      width: "200px",
      backgroundColor: "pink",
    },
    wrap: {
      // padding: "0px 200px",
      width: "80%",
      margin: "auto",
    },

    verticalCardWrapper: {
      display: "flex",
      flexWrap: "wrap",
      margin: "20px 0px",
      flexDirection: "row",
    },
  }
  return (
    // <Layout main width="100%">
      // <div style={style.wrap}>
      //   <div className="hover:shadow-2xl">
      //     {firstBlog?.map(item => {
      //       // return <HorizontalCard data={item} />
      //     })}
      //   </div>

      //   <div style={style.verticalCardWrapper} className="row row-cols-sm-1">
      //     {otherBlogs?.map(item => {
      //       // return <VerticalCard data={item} />
      //     })}
      //   </div>
      // </div>
    // </Layout>
    <Layout>
      <div>
        <p>this is simpel</p>
      </div>
    </Layout>
  )
}

export default IndexPage
