import React from "react"
import Images from "../../Common/Theme/Images"
import Label from "../../components/Label/Label"
// import "../../../src/pages/styles.css"
import "./HorizontalCardStyle.css"

const HorizontalCard = props => {
  const { data } = props
  let style = {
    // cardWrapper: {
    //   display: "flex",
    //   backgroundColor: "burlywood",
    //   height: "300px",
    //   borderRadius: "5px",
    //   flex: 1,
    //   marginTop: "-70px",
    //   width: "100%",
    // },

    text: {
      flex: 0.35,
      background: "white",
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
      padding: "30px",
      flexGrow: 1,
    },

    image: {
      // flex: 1.5,
      maxWidth: "50%",
      borderTopLeftRadius: "5px",
      borderBottomLeftRadius: "5px",
    },

    imgWrapper: {
      flex: 0.65,
      width: "700px",
      objectFit: "contain",
      borderRadius: "5px",
      backgroundImage: `url(${Images.banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    title: {
      color: "black",
      fontWeight: "bold",
    },
    excerpt: {
      color: "black",
      fontSize: "16px",
    },
  }

  return (
    <div className="hover:border-gray-300">
      <div className="cardWrapper">
        <div className="imgWrapper">
          {/* <img style={style.image} src={Images.banner} alt="this is banner" /> */}
        </div>
        <div style={style.text}>
          <h3 style={style.title}>{data.Title}</h3>
          <p style={style.excerpt}>{data.Description}</p>{" "}
        </div>
      </div>
    </div>
  )
}

export default HorizontalCard
