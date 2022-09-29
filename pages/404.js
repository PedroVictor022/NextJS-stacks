import NextLink from "../src/components/Link";
import TextBolder from "../src/components/Texts";

export default function Page404() {
   return (
      <div>
         <h1>Pagina não encontrada</h1>
         <TextBolder as='p'>Pagina não foi encontrada no sistema!</TextBolder>
         <NextLink href="/">Voltar a HOME</NextLink>
      </div>
   )
}