import React from "react"
import "./CategoryPageStyle.css"
import Images from "../../Common/Theme/Images"
import Layout from "../../components/Layout/Layout"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default function CategoryPage() {
  const query = graphql`
    {
      allStrapiCategory {
        nodes {
          blogs {
            Title
            Description
          }
          slug
        }
      }
    }
  `

  const {
    allStrapiCategory: { nodes: categoriesData },
  } = useStaticQuery(query)

  const style = {
    moneyContainer: {
      padding: "20px 20px",
      borderBottom: "1px solid black",
      borderTop: "3px solid black",
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "lightgrey",
    },
    container: {
      backgroundColor: "lightblue",
      width: "90%",
      margin: "auto",
      marginTop: "10px",
    },
    mainPictureContainer: {
      // width: "60%",
      paddingRight: "15px",
      borderRight: "1px solid grey",
      // flex: 0.6,
      display: "grid",
      gridArea: "section1",
    },

    titleContainer: {
      color: `black`,
      textAlign: "center",
      fontWeight: "bold",
      width: "80%",
      margin: "auto",
      fontSize: 22,
    },

    subTitleContainer: {
      color: `black`,
      textAlign: "center",
      fontWeight: "bold",
      width: "80%",
      margin: "auto",
    },
    sidePicture: {
      // width: "25%",
      flex: 0.35,
      paddingLeft: "15px",
      gridArea: "sidebar",
    },
    title: {
      color: `black`,
      fontWeight: "bold",
    },
    author: {
      fontSize: 14,
    },
    textclass: {
      ":hover": {
        transform: "scale(1.5)",
        // backgroundColor: "orange",
      },
    },
    seeAll: {
      textDecoration: "underline",
      color: `black`,
      fontWeight: "bold",
    },
  }

  return (
    <Layout color="black">
      {categoriesData.map(item => {
        let topItem = item.blogs.slice(0, 1)
        let lowerSectionItems = item.blogs.slice(1, 5)
        let columnItems = item.blogs.slice(5, 7)

        console.log("Title", topItem)

        return (
          <div className="mainWrapper">
            <div style={style.moneyContainer}>
              <p style={style.title}>{item.slug}</p>
              <Link to="/SearchScreen/SearchScreen" state={{ dataObj: item }}>
                <p style={style.seeAll}>See All </p>
              </Link>
            </div>

            <div className="mainSectionWrapper">
              <div style={style.mainPictureContainer}>
                {/* main picture*/}
                {topItem.map(item => {
                  return (
                    <div>
                      <img src={Images.banner} />
                      <p style={style.titleContainer}>{item.Title}</p>
                      <p style={style.subTitleContainer}>{item.Description}</p>
                      <p style={{ fontSize: 14, textAlign: "center" }}>
                        BySarah HansenForbes Staff
                      </p>
                    </div>
                  )
                })}

                <div className="lowerSectionWrapper">
                  {lowerSectionItems.map(item => {
                    return (
                      <div className="lowerSection">
                        <div className="lowerSectionImageContainer">
                          <img src={Images.banner} />
                        </div>
                        <div style={{ flex: 0.7, padding: "0px 10px" }}>
                          <p style={{ fontSize: 14, color: "black" }}>
                            {item.Title}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* colums */}

              <div style={style.sidePicture}>
                {columnItems.map(() => {
                  return (
                    <div>
                      <div>
                        <img src={Images.banner} />
                      </div>
                      <p style={style.title}>{item.Title}</p>
                      <p style={style.title}>{item.Description}</p>
                      <p style={style.author}>ByJeff KauflinForbes Staff</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </Layout>
  )
}
