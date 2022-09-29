import NextLink from "../src/components/Link";
import TextBolder from "../src/components/Texts";
import Title from "../src/components/Title";

export default function Page404() {
   return (
      <div>
         <Title as='h1'>Pagina não encontrada</Title>
         <TextBolder as='h2'>Pagina não foi encontrada no sistema!</TextBolder>
         <NextLink href="/">Voltar a HOME</NextLink>
      </div>
   )
}