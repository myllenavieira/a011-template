// const estudante = {
//     nome: "Myllena",
//     sobrenome: "Vieira",
//     matrícula: 20123,
//     nota: [7, 6, 7, 8.6]
// }
// console.log("Objeto estudante", estudante);
// estudante.modulo = 'HTML Semântico';
// console.log("Objeto com módulo", estudante);

// console.log('nome do estudante:', estudante.nome);
// console.log('Segunda nota do semestre:', estudante.nota[1]);
// console.log('Modulo atual:', estudante.modulo);

// const copiaEstudante = {...estudante}
// console.log('Cópia:', copiaEstudante);

// copiaEstudante.nome = 'AstroDev';
// copiaEstudante.nota = [...copiaEstudante.nota, 9];
// copiaEstudante.modulo = "CSS Semântico";
// console.log(copiaEstudante);

// const EstudantesLabenu = [];
// EstudantesLabenu.push(estudante);
// EstudantesLabenu.push(copiaEstudante);
// console.log('Estudantes Labenu', EstudantesLabenu);

const carrinho = {
    nome: 'Myllena',
    pagamento: 'cartão de crédito',
    endereço: 'Rua Fláflá, 65'
}
carrinho.compras = [
    {nome: "Bombons", 
    preço: 12.30,
    qtde: 5},
    {nome: "Vinho",
    preço: 56.70,
    qtde: 1}
];

// quantidadeCompras = carrinho.compras[0].qtde + carrinho.compras[1].qtde
// console.log(`Quantidade de compras: ${quantidadeCompras} unidades`);
console.log('Quantidade de itens:', carrinho.compras.length);
console.log('Carrinho:', carrinho);

const carrinhoPresente = {...carrinho};
carrinhoPresente.nome = "Adriana";
carrinhoPresente.pagamento = "cartão presente";

console.log('Carrinho Presente:', carrinhoPresente);
