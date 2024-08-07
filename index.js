const prompt = require("prompt-sync")();

const {
    adicionarLivro,
    listarLivros,
    atualizarLivro,
    deletarLivro,
} = require("./backend.js");

while(true) {
    console.log(`
    Cadastro de Livros: 
    1. Adicionar Livro.
    2. Listar Livros.
    3. Atualizar Livros.
    4. Deletar Livros.
    5. Sair. `)

    let opcao = parseInt(prompt("Esolha uma opção: "));

    switch (opcao) {
        case 1:
            adicionarLivro();
            break;

        case 2:
            listarLivros();
            break;

        case 3:
            atualizarLivro();
            break;

        case 4:
            deletarLivro();
            break;

        case 5:
            process.exit();
            break;
            
        default:
            console.log("Dados inválidos, tente novamente. ")
            break;
    }
}
