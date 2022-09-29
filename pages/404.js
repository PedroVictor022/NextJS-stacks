import NextLink from "../src/components/Link";

export default function Page404() {
   return (
      <div>
         <h1>Pagina não encontrada</h1>
         <p>Pagina não foi encontrada no sistema!</p>
         <NextLink href="/">Voltar a HOME</NextLink>
      </div>
   )
}