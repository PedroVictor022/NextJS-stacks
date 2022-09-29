import React from "react";
import NextLink from "../src/components/Link";
import TextBolder from "../src/components/Texts";
import Title from "../src/components/Title";

export default function Home(){
   return (
      <div>
         <Title as="h1">Studying NextJS</Title>

         <div className="navLinks">
            <TextBolder as="p">Routes</TextBolder>
            <NextLink href="/teste1">
               Teste 1
            </NextLink>
            <NextLink href="/teste2">
               Teste 2
            </NextLink>
         </div>

         <div>
            <Title as='h2'>CSS-in-Js</Title>
         </div>

      </div>
   )
}