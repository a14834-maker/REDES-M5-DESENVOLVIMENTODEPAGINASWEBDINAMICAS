# Fundamentos de JavaScript e Introdução ao DOM

## Introdução
Neste trabalho foram abordados os fundamentos da linguagem JavaScript e a introdução ao DOM. O objetivo é aprender a utilizar JavaScript para criar páginas web interativas e modificar conteúdos HTML.

## 1. Fundamentos da linguagem

### Variáveis
As variáveis permitem guardar informações que podem ser utilizadas durante a execução de um programa.

- `let`: permite alterar o valor.
- `const`: não permite reatribuir o valor.

### Tipos de dados
Os principais tipos de dados em JavaScript são:

- **String:** texto.
- **Number:** números.
- **Boolean:** verdadeiro ou falso.
- **Undefined:** valor não definido.
- **Null:** ausência de valor.
- **Object:** conjunto de propriedades.

### Operadores
Os operadores permitem realizar cálculos e comparações.

- **Aritméticos:** `+`, `-`, `*`, `/`, `%`
- **Comparação:** `===`, `!==`, `>`, `<`, `>=`, `<=`
- **Lógicos:** `&&`, `||`, `!`

### Objetos JavaScript
Os objetos permitem guardar várias informações relacionadas dentro de uma única estrutura.

Exemplo: um evento pode ter nome, cidade, ano e número de participantes.

## 2. Introdução ao DOM

### O que é o DOM?
DOM significa Document Object Model. Permite ao JavaScript aceder aos elementos HTML e modificar os conteúdos de uma página.

### Selecionar elementos
Podemos selecionar elementos HTML através de:
- `querySelector()`
- `getElementById()`
- `querySelectorAll()`

### Modificar conteúdos
A propriedade `textContent` permite alterar o texto apresentado numa página.

Também podemos modificar classes CSS através de `classList`.

### Eventos
Os eventos permitem que o JavaScript responda às ações do utilizador.

Alguns exemplos:
- `click`
- `input`
- `submit`
- `change`
- `keydown`

O método `addEventListener()` permite detetar esses eventos.

## 3. Demonstração prática

Foi desenvolvido um exemplo de uma página sobre o Web Summit 2026.

Ao clicar num botão, o JavaScript atualiza:
- O nome do evento.
- A localização.
- Uma mensagem de boas-vindas.

## 4. Exercícios práticos

### Exercício 1 – Cartão de orador
Criar um cartão com informações de um orador, utilizando objetos JavaScript, eventos e DOM para atualizar os conteúdos.

### Exercício 2 – Contador de participantes
Criar um contador interativo que permite:
- Adicionar participantes.
- Remover participantes.
- Impedir valores negativos.
- Atualizar o número apresentado na página.
- Apresentar uma mensagem quando atingir 10 participantes.

## Conclusão
Com este trabalho aprendi a utilizar variáveis, tipos de dados, operadores e objetos em JavaScript. Também aprendi a trabalhar com o DOM e eventos para tornar páginas web mais interativas.
