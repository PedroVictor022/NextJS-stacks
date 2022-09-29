import React from 'react';

export default function Title({ children, as }) {
   const Tag = as;

   return (
      <React.Fragment>
         <style jsx>{`
            ${Tag} {
               color: #fefefe;
            }
         `}</style>
         <Tag>
            {children}
         </Tag>
      </React.Fragment>
   )
}