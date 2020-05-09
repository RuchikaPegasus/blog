import React from "react"
import { Link } from "gatsby"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
// import styles from "./layout.module.scss"

const layout = props => {
  const { main, color, width } = props

  let styles = {
    container: {
      margin: "0 auto",
      color: "white",
      background: "#F4F4F4",
      position: "relative",
    },

    headerContainer: {
      alignItems: "flex-end",
      width: width ? width : "80%",
      margin: "0 auto",
      //   vertical-align: 'bottom',
    },

    titlewrapper: {
      padding: "45px 0px",
      background: "black",
      margin: "auto",
      display: "block",
      alignSelf: "center",
    },
    title: {
      fontSize: "30px",
      fontFamily: "Oswald sans-serif",
      textAlign: "center",
    },

    headerWrapper: {
      // padding: "0px 200px",
      // width: "80%",
      height: "350px",
      background: "black",
      margin: "auto",
    },
  }

  return (
    <div style={styles.container}>
      {main ? (
        <div style={styles.headerWrapper}>
          <div style={styles.titlewrapper}>
            <p style={styles.title}>FTFP</p>
            <p style={styles.title}>Fix the Fundamentals Platform</p>
          </div>
          <div style={styles.headerContainer}>
            {/* <Header color={color} /> */}
          </div>
        </div>
      ) : (
        // <Header color={color} />
        <p>this is tewxt</p>
      )}
      {props.children}
      <div style={{ bottom: "0px", width: "100%" }}>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default layout
