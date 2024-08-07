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
        let livro = prompt(
            "Ano do novo lançamento. (Caso não exista, digite 'fim')."
        );

        if(livro === "fim") {
            break;
        } else {
            novasVersoes.push(livro);
        }
    }

    if(titulo != "" && autor != "" && !isNaN(ano) && genero != "" && novasVersoes.length > 0) {
        if(id === undefined) {
            return {
                titulo,
                autor,
                ano,
                genero,
                id: countId++,
            };
        } else {
            return {
                titulo,
                autor,
                ano,
                genero,
                id,
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

            livro.novasVersoes.forEach((livro, indice) => {
                console.log(`Nova versão: ${indice + 1} : ${livro}`);
            });
        });
        return true;
    }
};

const atualizarLivro = () => {
    if(listarLivros()) {
        const id = parseInt(prompt("Qual ID deseja editar: "));

        let indice = livros.findIndex((livro) => id === livro.id);

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

        const indice = livros.findIndex((livro) => id === livro.id);

        if(indice !== -1);
        console.log("Livro removido. ");
    } else {
        console.log("ID inexistente. ")
    }
};

module.exports = {
    adicionarLivro,
    listarLivros,
    atualizarLivro,
    deletarLivro,
}