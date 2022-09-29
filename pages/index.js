import NextLink from "../src/components/Link";

export default function Home(){
   return (
      <div>
         <h1>Studying NextJS</h1>

         <div className="navLinks">
            <h2>Routes</h2>
            <NextLink href="/teste1">
               Teste 1
            </NextLink>
            <NextLink href="/teste2">
               Teste 2
            </NextLink>
         </div>

      </div>
   )
}