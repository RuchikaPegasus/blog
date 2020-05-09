import React from "react"
// import styles from "./VerticalCardStyle.css"
import Images from "../../Common/Theme/Images"
import { Link } from "gatsby"
import Layout from "../../components/Layout/Layout"
import Label from "../../components/Label/Label"
import VerticalCard from "../../components/VerticalCard/VerticalCard"

const BlogPage = ({ props, location }) => {
  let styles = {
    excerpt: {
      color: "black",
      fontSize: "16px",
      zIndex: "20",
    },

    image: {
      // backgroundImage: url(Images.banner),
    },
  }

  
  const data = location.state.dataObj


  console.log("dta", data)

  return (
    <Layout color="black">
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <div style={{ padding: "20px 0px" }}>
          <Label
            title={data.Title}
            size="40px"
            color="black"
            bold={true}
            align="center"
          />

          <Label
            title="10 MARCH 2019"
            size="17px"
            color="black"
            align="center"
            margin="10px"
          />
        </div>

        <div
          style={{
            // maxHeight: "600px",
            // width: "auto",
            width: "100%",
            height: "700px",
            background: "coral",
            margin: "auto",
            backgroundImage: `url(${Images.banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <article
          style={{
            width: "80%",
            background: "white",
            margin: "auto",
            padding: "30px",
            marginTop: "-70px",
          }}
        >
          <p style={styles.excerpt}>{data.Description}</p>
        </article>

        <div
          style={{
            background: "lightgrey",
            height: "200px",
            width: "80%",
            margin: "20px auto",
            position: "relative",
            borderRadius: "10px",
            padding: "50px 0px",
          }}
        >
          {/* <div style={{ position: "absolute", top: "30%" }}> */}
          <Label
            title="Subscribe"
            size="17px"
            color="black"
            align="center"
            margin="10px"
            bold={true}
          />
          <Label
            title="Get the latest posts delivered right to your inbox"
            size="17px"
            color="black"
            align="center"
            margin="10px"
          />
          {/* </div> */}
        </div>
        <div
          style={{
            display: "flex",
            width: "80%",
            margin: "20px auto",
          }}
        >
          {/* <VerticalCard />
          <VerticalCard /> */}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
