import React from "react";

export default function TextBolder({ children, as }) {
   const Tag = as;
   return (
      <React.Fragment>
         <style jsx>{`
            ${Tag} {
               color: #f3f3f3;
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
