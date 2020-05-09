import React from "react"
// import styles from "./VerticalCardStyle.css"
import Images from "../../Common/Theme/Images"
import { Link } from "gatsby"

const VerticalCard = props => {
  const { data } = props
  let styles = {
    wrapper: {
      textDecoration: "none",
      margin: "0px 10px",
      marginBottom: "25px",
      backgroundColor: "lightgrey",
      paddingBottom: "10px",
      borderRadius: "5px",
      maxWidth: "360px",
    },
    imageWrapper: {
      maxHeight: "400px",
      objectFit: "contain",
    },

    text: {
      padding: "0px 15px",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
    },

    // wrapper: {
    //   hover: {
    //     transform: "scale(1.05)",
    //     transition: "all 200ms ease-in",
    //   },
    // },

    // wrapper: {
    //   " nth-child(1)": {
    //     marginRight: 0,
    //   },
    // },

    image: {
      width: "100%",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
    },
    excerpt: {
      color: "black",
      fontSize: "16px",
    },
    time: {
      color: "#222831",
      fontSize: "14px",
    },
  }

  return (
    <Link
      to="/BlogPage/BlogPage"
      style={styles.wrapper}
      state={{ dataObj: data }}
    >
      <div style={styles.imageWrapper}>
        <img src={Images.banner} style={styles.image} />
      </div>
      <div style={styles.text}>
        <h3 style={{ fontWeight: "bold", color: "black" }}>{data.Title}</h3>
        <p style={styles.excerpt}>{data.Description}</p>
        <p style={styles.time}>{data.minutes} mins read</p>
      </div>
    </Link>
  )
}

export default VerticalCard
