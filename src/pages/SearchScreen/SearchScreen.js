import React from "react"
import Images from "../../Common/Theme/Images"
import Label from "../../components/Label/Label"
import Layout from "../../components/Layout/Layout"
import { Link } from "gatsby"
import "./SearchScreenStyle.css"

const SearchScreen = ({props,location}) => {
  const style = {
    titleContainer: {
      color: `black`,
      fontWeight: "bold",
    },
    container: {
      width: "80%",
      margin: "auto",
      marginBottom: "10px",
      marginTop: "10px",
    },
    mainWrapper:{
      // height:'calc(100vh - 155px)',
            height:'calc(100vh - 100%)',
  minHeight:'calc(100vh - 155px)',
    }
  }

    const Item = location.state.dataObj
    let data = Item.blogs
    console.log("data search", data)

  
  return (
    <Layout color="black">
      <div style={style.mainWrapper}>
        {data.map(item => (
          <div style={style.container}>
            <div className="cardWrapper">
              <div style={{ flex: 0.2 }}>
                <img src={Images.banner} />
              </div>

              <div
                style={{
                  flex: 0.7,
                  padding: "10px 20px",
                }}
              >
                <Link to="/BlogPage/BlogPage" state={{ dataObj: item }}>
                  <h4 style={{ color: "black" }}>{item.Title}</h4>
                  <p style={style.titleContainer}>{item.Description}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default SearchScreen
