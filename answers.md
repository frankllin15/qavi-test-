## Part 1: Conceptual Knowledge of HTML, CSS, JavaScript, and TypeScript

### HTML

1. Define HTML and its role in web development.
   É uma linguagem de marcação de texto. Utilizado para definir a estrutura da página. Nela é possível definir títulos, parágrafos, links listas, divisões, tabelas, campos de input, entre outros.
2. Explain the structure of an HTML document.
   O documento HTML possue 3 divisões basicas:
   > - doctype: Deve ser a primeira linha do arquivo que indica que o tipo do arquivo é HTML `<!DOCTYPE html>`
   > - `<html>`: Define o inicio e o fim do conteudo do documento, envolve as tags `body`e `head`
   > - `<head>`: Onde é possível inserir metadados, como titulo e descrição da página. Permite a importação de arquivos externos (CSS, Javascript) e fonts. Também é possível definir estilização CSS utilizando a tag `style`. O conteudo dessa sessão não tem efeito visual.
   > - `<body>`: Onde são inseridas as tags visuais como div, h1, h2, p, img, etc
   > - `<script>`: Definido dentro da tag `body`. Permite a execução codigo JavaScript.
3. Differentiate between block-level and inline elements. Provide examples.
   > - block-level elements são tags que ocupam a largura total disponivel. Quando inserido o comportamento é ser adicinado em uma nova linha. Permite envolver outras tags. Ex: `<div>`, `<p>`, `<h1>`, `<table>`
   > - inline elements são tags que ocupam apenar a largura necessária para o elemento. Quando inserido varios elementos inline um após o outro, o comportamento esperado é que eles compartilhem a mesma linha. Ex: `<sapn>`, `<input>`, `<a>`.
4. What is the significance of semantic HTML? Provide examples of semantic
   elements.
   > São tags específicas que oferecem contexto para a página. Não possuem impacto visual. É utilizado principalmente para permitir maior acessibilidade, por exemplo para leitores de tela

### CSS

5. Describe the purpose of CSS in web development.
   Utilizado para definir estilos visuais para os elementos HTML como cores, tamanhos, fontes, alinhamentos, entre outros.
6. Explain the box model and its components.
   > É um modelo que define os elementos como se fossem caixa. Essas caixas possuem níveis:
   >
   > - `content`: O conteudo interno do elemento.
   > - `padding`: Espaçamento entre o `content` e `border`
   > - `border`: Borda que envolve o `content` e o `padding`
   > - `margin`: Margin externa do elemento
7. Differentiate between padding and margin.
   > O padding é o espaçamento entre o conteudo interno do elemento e a borda. A margim é o espaçamento do elemtno em relação aos elementos exteriores, incluindo os limites do elemento superior.
8. How can CSS selectors be categorized? Provide examples of each type.
   > - Seletor de elemento: definido a partir da tag do elemento.
   >   Ex: `div` seleciona todos os elemento `<div>`
   > - Seletor de classe: definido a partir do atributo classe. Ex: `.header` seleciona todos os elementos que possuem a classe `.header`
   > - Selector de ID: seleciona o elemento a partir do atributo `id` do elemento. Ex: `#root` seleciona todos elementos que possuem o atributo id `root`
   > - Seletor de atributo: selecionado os elementos a partir do valor do atributo. Ex: `[open="true"]` seleciona todos os elemento que possuem o atributo `open` com o valor `"true"`
   > - Selector de decendentes: seleciona todos os elementos que são decendentes de outro elemento. Ex: `ul li` seleciona todos os elementos `<li>` que são descendentes de `<ul>`

### JavaScript

9. What functionalities does JavaScript add to a webpage?
   > - Adicionar interatividade
   > - Criar lógicas mais complexas de comportamento
   > - Permite fazer requisição HTTP.
   > - Adicionar observação de eventos. Ex: quando o evento de `click`for detectado, determinda ação será executada.
   > - Acesso a `cookies` e ao `local storage`
   > - Manipulação de elemntos HTML de forma programática
10. Explain the differences between var, let, and const.

    > - `var`: define uma variável de scopo global. Seu valor pode ser alterado. Deve ser evitado.
    > - `let`: define uma variável com o escopo restrito. Seu valor pode ser alterado
    > - `const`: define uma variável com o escopo restrito. Seu valor **não** pode ser alterado

11. What are data types in JavaScript? List them and provide examples.
    > #### Tipos primitivos
    >
    > - `number`: tipo de dado numerico (inteiro e de ponto flutuante). Ex: `let n = 1`
    > - `string`: cadeia de caracteres. Ex: `const name = "Frank"`
    > - `boolean`: tipo de dado lógico, pode amazenar os valores verdadeiro ou false. Ex: `let loading = true`, `let loading = false`
    > - `undefined`: representa uma variavel que foi declarada mas não foi atribuida nenhum valor. Ex: `let age`
    > - `null` representa a ausência intencional de valor. Ex: `let nullVal = null`
    >
    > #### Tipos de referência
    >
    > - `object`: esstrutura de dado chave e valor. Ex: `const person = { name: "John", age: 34 }`
    > - `Array`: estrutura de dado lista. Ex: `const fruits = ["apple", "banana"]`
    > - `Function`: bloco de código reutilizavel. Ex:
    >
    > ```js
    >  function (name) {
    >   console.log("Olá, " + name)
    > }
    > ```
    >
    > - `Date`: representa um valor de data. Ex: `let now = Date()`
12. Describe how functions work in JavaScript and how to declare one.
    > São blocos de códigos reutilizáveis. Podem ou não retorna um valor. É possível enviar informações para as funções através de parâmentros
    > Ex:
    >
    > ```js
    > function sum(a, b) {
    >   return a + b;
    > }
    > ```
    >
    > Existem também as arrow functions que são uma forma mais curta de definir uma função. Ex:
    >
    > ```js
    > const sum = (a, b) => a + b;
    > ```
    >
    > Funções podem receber outras funções como parametro.
    >
    > ```js
    > // Função que recebe outra função como parâmetro
    > function executaOperacao(a, b, operacao) {
    >   return operacao(a, b);
    > }
    > // Função de soma
    > function sum(a, b) {
    >   return a + b;
    > }
    > ```

### 13.What is TypeScript and why is it preferred in modern web development?

14. Explain the benefits of using TypeScript over JavaScript.
    > - Typescript oferece o recurso de definição de tipos estáticos, onde uma variavel tem seu tipo definido e não pode ser reatrinuido outro valor de tipo diferente. Isso ajuda a evitar erros em tempo de execução.
    > - Melhor legibilidade. Ao saber qual tipo de dado determidada variável pode receber ajuda no entendimento do código.
    > - adição de funcionalidades como decorators. Que são uma forma de adicionar comportamento a classes, métodos, propiedades e parametros.
15. How do you declare a variable with a specific type in TypeScript?
    > ```ts
    > const name: string = "Frank";
    > ```
16. What are interfaces in TypeScript and how are they used?
    > São contratos que definem a assinatura de classes e funções.
    > Ex:
    >
    > ```ts
    > //Definição de interface
    > interface Person {
    >   name: string;
    >   say(): void;
    > }
    >
    > //Utilização de interface
    > class Womem implements Person {
    >   name: string;
    >   constructor(name: string) {
    >     this.name = name;
    >   }
    >   say() {
    >     console.log("Olá, " + this.name);
    >   }
    > }
    > // Interface de função
    > interface Sum {
    >   (a: number, b: number): number;
    > }
    >
    > const sum: Sum = (a, b) => a + b;
    > ```
