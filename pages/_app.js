import App from "next/app";
import React from "react";
import GlobalStyles from "../src/styles/Global"
function MyApp({ Component, pageProps}) {
   return (
      <React.Fragment>
         <GlobalStyles/>
         <Component {...pageProps}/>
      </React.Fragment>
   )
}
export default MyApp