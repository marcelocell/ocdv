---
title: Quem é esse Pokemon?
title_meta: Quem é esse Pokemon? É o Docusaurus!
authors: marcelojr
image: img/thumbnails/docusaurus_pokemon.png
description: O Docusaurus é um gerador de sites estáticos. Ele cria um SPA (Single Page Application) com navegação rápida do lado do cliente, aproveitando todo o poder do React para tornar seu site interativo. Ele oferece recursos de documentação prontos para uso, mas pode ser usado para criar qualquer tipo de site (site pessoal, produto, blog, landing pages de marketing, etc.).
tags: [docusaurus, hello]
keywords: [Docusaurus, site estático, React, documentação, landing page, blog, GitHub Pages]
draft: true
---

![Docusaurus Pokemon](img/docusaurus_pokemon.png)

## É o Docusaurus!

Antes de começar a falar dele, vamos ver a definição segundo a própria [documentação](https://docusaurus.io/docs): 
>🧐 O Docusaurus é um gerador de sites estáticos. Ele cria um SPA (Single Page Application) com navegação rápida do lado do cliente, aproveitando todo o poder do React para tornar seu site interativo. Ele oferece recursos de documentação prontos para uso, mas pode ser usado para criar qualquer tipo de site (site pessoal, produto, blog, landing pages de marketing, etc.).
>
> — Documentação do Docusaurus traduzida por mim

<!-- truncate -->

![Docusaurus Revelação](img/docusaurus_revelacao.png)

## Docusaurus, eu escolho você!

Agora que o nosso Pokemon foi devidamente apresentado, quem olhar no rodapé desta página vai perceber que o OCDV é construído com Docusaurus. Eu poderia usar um CMS de prateleira? Poderia! Talvez até deveria... Mas que graça teria só escrever os posts, sem nem ao menos ~sofrer um pouco antes~ aprender uma ferramenta nova?

Ok, eu já tinha a ideia de gerar minhas páginas estáticas, mas por que o Docusaurus e não ~o Charmander ou o Squirtle~ outro gerador de site estático? Primeiro que em minhas pesquisas, ele sempre estava em listas de top 10 geradores. Segundo que eu já usava esse gerador para fazer documentação no meu trabalho, então nada mais justo que usar um gerador que eu já conhecia minimamente e que seria útil no meu dia a dia. 

Para argumentos mais técnicos a favor do uso do Docusaurus, tem essa [sessão da documentação oficial](https://docusaurus.io/docs#comparison-with-other-tools "Comparison with other tools"), que compara as diferentes ferramentas.

## Início da Jornada

Quem quiser conhecer um pouco mais desse gerador, vem comigo subir uma instância local e iniciar a jornada de criação de sites estáticos.

### Pré-requisitos

Não precisamos de muito para começar. Se não tiver na sua máquina ainda, precisa fazer o [Download do Node.js](https://nodejs.org/pt/download/), eu fiz o download do binário pré-compilado, que é a forma mais fácil de fazer a instalação, e escolhi a última versão LTS (Long Term Service) que tinha disponível: **v22.17.0**.

Outra necessidade é ter um editor ou uma IDE para editar os arquivos. Como javeiro, eu estou muito acostumado a usar o IntelliJ e baixei o [WebStorm](https://www.jetbrains.com/pt-br/webstorm/download), que é da JetBrain também e possui a mesma interface que eu estou acostumado, mas isso é bem pessoal e fica a gosto do freguês. Outras boas opções são [Sublime Text](https://www.sublimetext.com/) ou [VS Code](https://code.visualstudio.com/).

### Rodando Localmente

Para começar um projeto novo usando Docusaurus é só rodar o comando a seguir no terminal:

```bash
npx create-docusaurus@latest nome-projeto classic
```

Como aqui está usando a versão "latest", é usado a última versão lançada da ferramenta, que no meu caso foi a **3.8.1**. O argumento "nome-projeto" vai ser o nome que será utilizado e "classic" é o template básico fornecido. Outro argumento que é possível passar é a linguagem que será utilizada, mas se não passar este argumento, ele já dará as duas alternativas que são "Javascript" ou "TypeScript" para escolher. Não sou íntimo de nenhuma das duas, mas TypeScript faz mais meu **tipo**. 😋

A saída do comando deve ficar como a captura de tela a seguir: 

![resultado do comando create](img/cmd_projeto_criado.png)

Já de cara, ele explica os quatro comandos básicos que mais usaremos. Há também outros scripts úteis que podemos ver os detalhes [aqui neste link](https://docusaurus.io/docs/cli).

Em seguida, podemos entrar na pasta criada e rodar o comando 'start':

```bash
npm start
```

Outra opção é abrir o projeto via WebStorm, abrir o arquivo **package.json**, clicar no ícone de <spam class="text--success">**play**</spam> da linha "start" dentro de "scripts" e clicar em **Run 'start'**, como indicado na captura de tela abaixo:

![start](img/scrpt_start.png)

Esse caminho é só na primeira vez, as próximas execuções basta selecionar "start" e clicar no ícone de <spam class="text--success">**play**</spam> no topo da IDE.

Como resultado, se deu tudo certo, veremos a seguinte saída:

![Resultado do comando start](img/bash_npm_start.png)

O navegador padrão do computador deve abrir o tutorial, que estará rodando localmente na sua máquina, mas caso não abra, é só abrir o navegador e entrar no endereço que está na captura de tela acima. Se tudo deu certo e a versão que você está usando é a mesma que a minha (**3.8.1**), a página que você verá é essa:

![Página inicial do tutorial do Docusaurus](img/tutorial_docusaurus.png)

:::note

Para parar a execução, no terminal é só apertar **"ctrl + c"** e no WebStorm basta clicar no ícone de <spam class="text--danger">**Stop**</spam>.

:::

## Próximos Passos

Agora é só dar play no vídeo abaixo e ler o tutorial que está aberto na outra aba do seu navegador, 6 min serão suficientes para entender o básico da ferramenta!

<iframe width="560" height="315" src="https://www.youtube.com/embed/fJ9rUzIMcZQ?si=qYCnlNvDeYfH6lLX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```js
return 20;
```
