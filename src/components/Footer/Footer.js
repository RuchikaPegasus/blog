import React from "react"

const footer = () => {
  let style = {
    text: {
      color: "#a5a9ad",
      fontFamily: "Arial",
      fontSize: 14,
    },
    footerItens: {
      display: "flex",
      listStyleType: "none",
      justifyContent: "space-evenly",
      marginLeft: "0px",
      color: "grey",
      fontFamily: "Arial",
      fontSize: 14,
      marginBottom: "0px",
    },
    footerContainer: {
      width: "80%",
      margin: "auto",
      display: "flex",
      flexDirection: "row",
      padding: "20px 0px",
      justifyContent: "space-between",
    },
  }
  return (
    <footer
      style={{
        background: "black",
        height: "80px",
        width: "100%",
      }}
    >
      <div style={style.footerContainer}>
        <div>
          <p style={style.text}>Avantika @ 2020, developed by xyz.com</p>
        </div>

        <div>
          {/* <ul style={style.footerItens}> */}
          <ul className="w-56 flex text-xs justify-around text-gray-400">
            <li>Latest Post</li>
            <li>Facebbok</li>
            <li>Twitter</li>
            <li>RSS</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default footer
