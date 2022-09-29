import NextLink from "../src/components/Link";
import Title from "../src/components/Title";

export default function Teste1() {
   return (
      <div>
         <Title as='h1'>Pagina de teste 1</Title>
         <NextLink href="/">Voltar para o Home!</NextLink>
      </div>
   )
}