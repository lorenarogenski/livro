const prompt = require("prompt-sync")({sign: true});

let livros = [];

let countId = 1;

function getIndice(id) {
    const indice = livros.findIndex((el) => el.id == id);

    if (indice == -1) {
    console.log("ID inexistente");
    }
    return indice;
}

const modelo = (id) => {
    let titulo = prompt("Título do Livro: ");
    let autor = prompt("Autor do Livro: ");
    let ano = prompt("Ano de Lançamento: ");
    let genero = prompt("Gênero do Livro: ");

    let novasVersoes = [];

    while(true) {
        let versao = prompt(
            "Ano do novo lançamento. (Caso não exista, digite 'fim')."
        );

        if(versao.toLowerCase() === "fim") {
            break;
        } else {
            novasVersoes.push(versao);
        }
    }

    if(titulo != "" && autor != "" && !isNaN(ano) && genero != "" && novasVersoes.length > 0) {
        if(id === undefined) {
            return {
                id: countId++,
                titulo,
                autor,
                ano,
                genero,
                novasVersoes,
            };
        } else {
            return {
                id,
                titulo,
                autor,
                ano,
                genero,
            };
        }
    } else {
        console.log("Dados inválidos! ");

        return undefined;
    }

};

const adicionarLivro = () => {
    let livro = modelo();
    if(livro !== undefined) {
        livros.push(livro);
        console.log("Livro adicionado com sucesso! ");
        console.log(livros);
    }
};

const listarLivros = () => {
    if(livros.length === 0) {
        console.log("Nenhum livro adicionado. ");
        return false;
    } else {
        livros.forEach((livro) => {
            console.log(`
            ID: ${livro.id},
            Título: ${livro.titulo},
            Autor: ${livro.autor},
            Ano de Lançamento: ${livro.ano},
            Gênero: ${livro.genero}.`
            );

            if(livro.novasVersoes.length > 0) {
                livros.novasVersoes.forEach((versao, indice) => {
                    console.log(`
                    Nova Versão ${indice + 1}: ${versao}`);
            });
        }
        });
        return true;
    }
};

const atualizarLivro = () => {
    if(listarLivros()) {
        const id = parseInt(prompt("Qual ID deseja editar: "));
        let indice = getIndice(id);

        if(indice !== -1) {
            let livroAtualizado = modelo(id);
            if(livroAtualizado !== undefined) {
                livros[indice] = livroAtualizado;
                console.log("Livro atualizado! ")
            }
        } else {
            console.log("ID inexistente. ");
        }
    }
};

const deletarLivro = () => {
    if(listarLivros()) {
        const id = parseInt(prompt("Qual ID deseja remover: "));
        const indice = getIndice(id);

        if(indice !== -1) {
            livros.splice(indice, 1);
            console.log("Livro removido. ");
        } else {
            console.log("ID inexistente. ")
        }
    }
};

module.exports = {
    adicionarLivro,
    listarLivros,
    atualizarLivro,
    deletarLivro,
}