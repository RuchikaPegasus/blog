import React, { Component } from "react"
// import { Link } from "gatsby"
import Layout from "../../components/Layout/Layout"

class MainPage extends Component {
  data = [
    {
      id: 1,
      title: "title1",
      content: "content 1",
    },
    {
      id: 2,
      title: "title 2",
      content: "content 2",
    },
    {
      id: 3,
      title: "title 3",
      content: "content 3",
    },
  ]

  showPost(item) {
    console.log("data", item.content)
  }

  render() {
    let style = {
      //   wrapper: {
      //     display: "flex",
      //     flex: 1,
      //     marginTop: "10px",
      //   },

      mainPageWrapper: {
        background: "salmon",
        flex: 0.8,
        marginLeft: "10px",
        padding: "20px",
      },

      titleCardWrapper: {
        flex: "0.25",
      },

      title: {
        color: "black",
      },
      titleWrapper: {
        flex: 1,
        padding: "10px",
        marginBottom: "10px",
        border: " 1px solid #bfbfbf",
      },

      // titleWrapper:hover {
      //   background-image: linear-gradient(
      //     to bottom right,
      //     #f6d365 0%,
      //     #fda085 51%,
      //     #f6d365 100%
      //   ),
      // }
    }

    return (
      //   <Layout>
      <div style={{ display: "flex", flex: 1, marginTop: "10px" }}>
        <div style={style.titleCardWrapper}>
          {this.data.map((item, index) => (
            <div style={style.titleWrapper} onClick={this.showPost(item)}>
              <p style={style.title}>{item.title}</p>
            </div>
          ))}
        </div>

        <div style={style.mainPageWrapper}>
          <div>
            <p>Main page</p>
          </div>
        </div>
      </div>
      //   </Layout>
    )
  }
}

export default MainPage
