# Desafio M3 Academy - VTEX IO 

## Configuração do inicial

1. Instale as dependências do projeto

```bash
yarn
```

2. Faça o login na VTEX na agencia Magma 

```bash
vtex login agenciamagma
```

3. Crie um workspace de desenvolvimento. 
Recomendamos seguir o padrão: `m3academy<nome>`. so e permitido o uso de letras minusculas e números.

```bash
vtex use m3academyanabrunasouza
```

## Desenvolvimento

1. Inicie o projeto

```bash
vtex link
```

2. Rode o gulp para compilar os arquivos

```bash
yarn scss
```

3. Abrar o seu workspace no navegador

```bash
vtex browse
```

## Problemas frequentes

### As vezes pode acontecer de bugar o link do projeto. Para resolver isso, rode o comando abaixo que vai desfazer o link e depois rode o comando de link novamente.

```bash
vtex unlink --all

vtex link
```


## Dicas de desenvolvimento

### Alternativa para o Flex layout 
A VTEX acaba impondo algumas limitacoes e verbosidade a mais nos blocos vtex.flex-layout. Para facilitar o desenvolvimento, criamos um bloco custom chamado `html`. Ele funciona da mesma forma que o flex-layout, mas com uma sintaxe mais simples que permite a escrita de um html mais semântico. [Veja a documentação do bloco aqui](../react/components/Html/readme.md).

### Blocos JSON para diferente para determinados tamanhos de tela

Para criar telas com diferentes blocos em diferente tamanhos de tela, podemos usar o bloco `responsive-layout`. Ele nos permite isso. [Veja a documentação do bloco aqui](https://learn.vtex.com/docs/course-layout-blocks-step09conditional-layout-lang-pt).
