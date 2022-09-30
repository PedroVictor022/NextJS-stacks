function GlobalStyles() {
   return (
      <style global jsx>
      {`
         *{
            font-family:sans-serif;
            padding:0;
            margin:0;
            box-sizing:border-box;
         }
         body{
            background-color:#222;
         }
      `}
      </style>
   )
}

export default GlobalStyles;