module.exports = {
   trailSlash: true,
   async redirects() {
      return [
         {
            source: "/about",
            destination: "/",
            permanent: true,
         },
         {
            source: "/perguntas",
            destination: "/faq/",
            permanent: true,
         }
      ]
   },
}

// COMO FUNCIONA ??
// Quando digitado about, na barra de pesquisa, ele redireciona o usuario para a home