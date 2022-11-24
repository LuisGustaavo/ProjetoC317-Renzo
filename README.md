<h1 align="center"> Sistema de compra, venda e manufatura </h1>

## Menu
- [Sobre](#Project)
- [React](#react)
- [Instalação e Deploy](#instalação-e-deploy)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
  - [IDE de desenvolvimento](#ide-de-desenvolvimento) 
- [Clonando o projeto](#clone-o-projeto-no-seu-computador)
  - [Possíveis erros](#possíveis-erros-após-a-execução-de-npm-start)
- [Autores](#autores)


## Sobre:
O projeto visa uma forma de integrar o produtor rural com as empresa que buscam determinados produtos sejam quaisquer deles frutas, verduras ou legumes. Na plataforma será possível que produtores rurais possam ofertar seus produtos e as empresas, então, comprar. De forma direta, simples e rápida.

## React

React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI de código aberto. React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.
Por ser uma ferramenta no qual não é da grade curricular do curso de graduação e, a fim de aprender sobre outras ferrametas que, possivelmente possamos usar no mercado de trabalho.

## Instalação e Execução

#### Front-end:

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
)](https://pt-br.reactjs.org/) 
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
)](https://developer.mozilla.org/en-US/docs/Learn/HTML) 
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
)](https://developer.mozilla.org/en-US/docs/Learn/CSS) 
[![JavaScritp](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

#### Back-end:
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
[![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
)](https://nodejs.org/en/)

#### IDE de Desenvolvimento 
[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)

## Instalação das Ferramentas necessárias 💻⚙️
Para instalar o Python é preciso ter em sua máquina o <a href="https://pypi.org/project/pip/">PIP</a>, gerenciador de pacotes do Python.<br>
Normalmente, o PIP é instalado automaticamente se você:
- Está usando Python baixado de <a href="https://www.python.org/">python.org</a>
⁉️ Vale ressaltar que, se você estiver usando IDE's como o <a href="https://www.jetbrains.com/pt-br/pycharm/">PyCharm</a>, esta IDE já possue o PIP integrado e também uma fácil instalação do <a href="https://www.jetbrains.com/help/pycharm/pytest.html">Pytest</a>, direto em suas configurações de projeto. O <a href ="https://code.visualstudio.com/docs/python/testing">VSCode</a> também tem sua extensão com o Python e seu guia de instalação. 

## Clone o projeto no seu computador:

```bash
git clone https://github.com/LuisGustaavo/ProjetoC317-Renzo.git

```

Com o projeto clonado em sua máquina
Instale as dependencias do projeto usando o npm (com o projeto aberto na IDE).

```bash
npm install
```

Para fazer executar o programa, rode dentro da pasta **lab-project** do projeto:

```bash
npm start
```

Note que após a inicialização, abrirá um localhost para execução do código.

```bash
http://localhost:3000
```

#### Possíveis erros após a execução de **npm start**

* Mensagem **Something is already running on port 3000**:

Execute o seguinte comando para corrigir o erro e liberar a porta 3000 e assim executar o projeto. 

```bash
npx kill-port 3000
```

* Mensagem **'React' must be in scope when using JSX**: 

Execute o seguinte comando para corrigir o erro, e rode **npm start** novamente.

```bash
npm update
```



## Autores
 **Alvaro Breno** - Link Github: [Alvaro Breno](https://www.github.com/AlvaroBreno)
 **Arilson Xavier** - Link Github: [Arilson Xavier](https://www.github.com/)
 **Luiz Gustavo** - Link Github: [Luiz Gustavoo](https://www.github.com/LuisGustaavoo)
