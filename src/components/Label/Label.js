import React from "react"
import Images from "../../Common/Theme/Images"
// import Label from "../../Components/Label/Label"

const Label = props => {
  const { title, size, color, bold, align, margin } = props

  let style = {
    titleWrap: {
      fontSize: size,
      textAlign: align ? align : "left",
      color: color,
      fontWeight: bold ? "bold" : "none",
      margin: margin ? margin : "0px",
    },
  }

  return (
    <div>
      <h3 style={style.titleWrap}>{title}</h3>
    </div>
  )
}

export default Label
