import React from "react";

export default function TextBolder({ children, as }) {
   const Tag = as;
   return (
      <React.Fragment>
         <style jsx>{`
            ${Tag} {
               color: #222;
               font-weight:900;
               font-family:sans-serif;
            }
         `}</style>
         <Tag>
            {children}
         </Tag>
      </React.Fragment>
   )
}