<h1 align="center">
    <img alt="ignews" title="#IgNews" src="public/images/logo.svg" width="250px" />
</h1>

<h4 align="center"> 
	Ig.News - Blog em NextJS
</h4>

<p align="center">	
  <a href="https://www.linkedin.com/in/yuripalacio/">
    <img alt="Made by yuripalacio" src="https://img.shields.io/badge/made%20by-yuripalacio-%2304D361">
  </a>
</p>

<p align="center">
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#aplicacao">Aplicação</a>
</p>

# 💻Projeto

Aplicação desenvolvida em Next.js "sem um Back-End" com o objetivo de entender os seus fundamentos, entender seu funcionamento por debaixo dos panos, o porquê ele foi criado, o que ele substitui no fluxo tradicional de aplicações React. <br />
Nesse projeto também foi utilizado SaaS, CSS Modules, TypeScript, SSR (Server Side Rendering), SSG (Static Side Generation) e OAuth com GitHub. <br />
Esta aplicação tem conexões com APIs externas como [Stripe](https://stripe.com/en-br), [FaunaDB](https://fauna.com/) e utilizado o [Prismic CMS](https://prismic.io/).

# 🛠Aplicação

A aplicação consiste em um blog para consumir conteúdos texto onde existe o recurso de assinatura para poder consumir todo o conteúdo da plataforma. Algo muito similar com o que temos hoje no [Medium](https://medium.com/). <br />
Foi desenvolvida a aplicação de uma forma que o usuário que no tenha assinatura possa ler alguns parágrafos da aplicação e com isso tenhamos a indexação nos mecanismos de busca. <br />

<ul>
<li>Pagamento - Stripe - O Stripe é uma API de pagamentos muito focada em experiência de desenvolvimento sendo muito fácil de integrar e um ambiente de staging muito bom.</li>
<li>Banco de Dados - FaunaDB - Por se tratar de uma aplicação Serveless, o FaunaDB é muito recomendado e fácil de utilizar.</li>
<li>CMS - Prismic - Foi escolhido por ser muito simples de utilizar e o plano gratuíto muito interessante.</li>
<li>Autenticação - GitHub - Não foi criado uma forma de autenticação do total zero, por isso foi escolhido utilizar o OAuth com GitHub.</li>
</ul>

# Saiba Mais

Desenvolvido por [Yuri Palacio](https://www.linkedin.com/in/palacio/)
