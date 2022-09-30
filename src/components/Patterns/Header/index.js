import React from "react";
import Title from "../../Title";

function Header() {
   return (
      <React.Fragment>
         <style jsx>
            {`
               header {
                  background-color:#111;
                  padding:1rem;
                  display:flex;
                  align-items:center;
                  justify-content:center;
                  flex-direction:column;
                  gap:0.5rem;
               }
               p {
                  color:#fefefe;
                  font-weight:600;
               }
            `}
         </style>
         <header>
            <Title as='h1'>Studying Next.JS</Title>
            <p>My studies Next.JS</p>
         </header>
      </React.Fragment>
   )
}
export default Header;