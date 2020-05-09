import React from "react"
import { Link } from "gatsby"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"


export default function Header(props) {
  const { color, width } = props
  let styles = {
    navbarWrapper: {
      background: color ? color : "none",
      padding: "10px 0px",
    },

    menuItems: {
      display: "flex",
      listStyleType: "none",
      justifyContent: "space-evenly",
      marginLeft: "0px",
      margin: "0px",
    },

   
    link: {
      padding: "0px 10px",
      textDecoration: "none",
      color: "white",
    },
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "sans-serif",
      fontSize: "15px",
      color: "white",
      alignContent: "center",
      top: "50%",
      width: "80%",
      margin: "auto",
    },
  }
  return (
    <header style={styles.navbarWrapper}>
      <div style={styles.wrapper}>
        <nav>
          <ul style={styles.menuItems}>
            <li>
              <Link to="/" style={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/CategoryPage/CategoryPage" style={styles.link}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/" style={styles.link}>
                Getting Started
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <ul style={styles.menuItems}>
            <li>
              <Link to="/about" style={styles.link}>
                FB
              </Link>
            </li>
            <li>
              <Link to="/contact" style={styles.link}>
                Twitter
              </Link>
            </li>
            <li>
              <Link to="/contact" style={styles.link}>
                Subscribe
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
