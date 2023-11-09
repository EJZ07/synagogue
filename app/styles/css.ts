import {createUseStyles} from 'react-jss'
import background from "../assets/back.png";

const useStyles = createUseStyles({
    title: {
      color: 'black',
      textAlign: "center",

      '& span': {
        // jss-plugin-nested applies this to a child span
        fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
      }
    },
    back: {
        width: "100%", height: "100%",
        backgroundImage:`url(${background})`,
        justifyContent: "center", 
        display: "flex", alignItems: "center"
    },
    center: {
        height: "35rem",
        padding: "3rem",
        paddingInline: "7rem", 
        
        backgroundColor: "white",
         borderRadius: "16px"
    },
    bars: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
  
    }


  })

  export default useStyles