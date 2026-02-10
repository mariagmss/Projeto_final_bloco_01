import { Colors } from './src/util/Colors';
import { Input } from './src/util/Input';
import { ProdutoController } from './src/controller/ProdutoController';
import { BolsaAvulsa } from './src/model/BolsaAvulsa';
import { ColecaoBolsas } from './src/model/ColecaoBolsas';

const produtos = new ProdutoController();

export function main() {

    let opcao: number;

    criarProdutosTeste();

    while (true) {

        console.log(Colors.fg.magentastrong,"┌─────────────────────────────────────────────────────────┐");
        console.log(" │  ▄▄▄     ▄▄▄            ▄▄▄▄▄▄▄                         │");
        console.log(" │   ███▄ ▄███            █▀▀██▀▀▀▀                   █▄   │");
        console.log(" │   ██ ▀█▀ ██               ██   ▄    ▀▀            ▄██▄  │");
        console.log(" │   ██     ██   ▄█▀█▄       ██   ████▄██ ▄███▀ ▄███▄ ██   │");
        console.log(" │   ██     ██   ██▄█▀       ██   ██   ██ ██    ██ ██ ██   │");
        console.log(" │ ▀██▀     ▀██▄▄▀█▄▄▄ ██    ▀██▄▄█▀  ▄██▄▀███▄▄▀███▀▄██   │");
        console.log(" │--------------------------------------Bolsas de Tricô----│");
        console.log(" │                                                         │");
        console.log(" │         [ 1 ] - Cadastrar Produto                       │");
        console.log(" │         [ 2 ] - Buscar Produto                          │");
        console.log(" │         [ 3 ] - Listar Produtos                         │");
        console.log(" │         [ 4 ] - Atualizar Produto                       │");
        console.log(" │         [ 5 ] - Deletar Produto                         │");
        console.log(" │         [ 0 ] - Sair                                    │");
        console.log(" │                                                         │");
        console.log(" └─────────────────────────────────────────────────────────┘", Colors.reset);
                                                         
        console.log(Colors.fg.magentastrong," Digite o número da opção desejada: ");
        opcao = Input.questionInt("");

        if (opcao === 0) {
            console.log(Colors.fg.magentastrong, "\n Me.Tricot - Obrigado por visitar nossa loja!");
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.magentastrong, "\n\n Cadastrar produto\n\n", Colors.reset);
                cadastrarProduto()
                keyPress()
                break;
            case 2:
                console.log(Colors.fg.magentastrong, "\n\n Buscar por produtos\n\n", Colors.reset);
                buscarProdutoPorId()
                keyPress()
                break;
            case 3:
                console.log(Colors.fg.magentastrong, "\n\n Listar todos os produtos\n\n", Colors.reset);
                produtos.listarTodos();
                keyPress()
                break;
            case 4:
                console.log(Colors.fg.magentastrong, "\n\n Atualizar dados do produto\n\n", Colors.reset);
                atualizarProduto();
                keyPress()
                break;
            case 5:
                console.log(Colors.fg.magentastrong, "\n\n Apagar um produto\n\n", Colors.reset);
                deletarProduto()
                keyPress()
                break;
            default:
                console.log(Colors.fg.red, "\n Opção Inválida!\n", Colors.reset);
                keyPress()
        }
    }

}

function sobre(): void {

    console.log(Colors.fg.magentastrong,"┌───────────────────────────────────────────────────────┐");
        console.log(" │                                                       │");
        console.log(" │   Projeto Desenvolvido por:                           │");
        console.log(" │   Maria Eduarda Gomes - mariaeduardao.gms@gmail.com   │");
        console.log(" │   GitHub - https://github.com/mariagmss               │");
        console.log(" │                                                       │");
        console.log(" └───────────────────────────────────────────────────────┘", Colors.reset);
}

function cadastrarProduto(): void {

    console.log("Nome da bolsa: ");
    const nome = Input.question("");

    console.log("Tamanho: ");
    const tamanho = Input.question("");

    console.log("Cor: ");
    const cor = Input.question("");

    console.log("Preço: R$ ");
    const preco = Input.questionFloat("");

    console.log("Pertence a uma coleção? (s/n): ");
    const resposta = Input.question("").toLowerCase();
    const pertenceColecao = resposta === "s";

    if (pertenceColecao) {

        console.log("Nome da coleção: ");
        const nomeColecao = Input.question("");

        produtos.cadastrar(
            new ColecaoBolsas(
                produtos.gerarId(),
                nome,
                tamanho,
                cor,
                preco,
                1,
                nomeColecao
            )
        );

    } else {

        produtos.cadastrar(
            new BolsaAvulsa(
                produtos.gerarId(),
                nome,
                tamanho,
                cor,
                preco
            )
        );
    }
}

function buscarProdutoPorId(): void {

    console.log("Digite o ID do produto: ");
    const id = Input.questionInt("");

    produtos.listarPorId(id);
}

function atualizarProduto(): void {

    console.log("Digite o ID do produto: ");
    const id = Input.questionInt("");

    const produto = produtos.buscarNoArray(id);

    if (produto !== null) {

        let nome = produto.nome;
        let tamanho = produto.tamanho;
        let cor = produto.cor;
        let preco = produto.preco;

        console.log(`\nNome atual: ${nome}`);
        console.log("Deseja alterar o nome? (s/n)");
        if (Input.question("").toLowerCase() === "s") {
            console.log("Digite o novo nome: ");
            nome = Input.question("");
        }

        console.log(`\nTamanho atual: ${tamanho}`);
        console.log("Deseja alterar o tamanho? (s/n)");
        if (Input.question("").toLowerCase() === "s") {
            console.log("Digite o novo tamanho: ");
            tamanho = Input.question("");
        }

        console.log(`\nCor atual: ${cor}`);
        console.log("Deseja alterar a cor? (s/n)");
        if (Input.question("").toLowerCase() === "s") {
            console.log("Digite a nova cor: ");
            cor = Input.question("");
        }

        console.log(`\nPreço atual: ${preco}`);
        console.log("Deseja alterar o preço? (s/n)");
        if (Input.question("").toLowerCase() === "s") {
            console.log("Digite o novo preço: R$ ");
            preco = Input.questionFloat("");
        }

        if (produto instanceof ColecaoBolsas) {
            produtos.atualizar(
                new ColecaoBolsas(
                    id,
                    nome,
                    tamanho,
                    cor,
                    preco,
                    1,
                    produto['nomeColecao']
                )
            );
        } else {
            produtos.atualizar(
                new BolsaAvulsa(
                    id,
                    nome,
                    tamanho,
                    cor,
                    preco
                )
            );
        }

    } else {
        console.log(Colors.fg.red, "Produto não encontrado!", Colors.reset);
    }
}

function deletarProduto(): void {

    console.log("Digite o ID do produto: ");
    const id = Input.questionInt("");

    produtos.deletar(id);
}

function keyPress(): void {
    console.log(Colors.reset,"\nPressione enter para continuar...");
    Input.prompt();
}

function criarProdutosTeste(): void {

    produtos.cadastrar(new BolsaAvulsa(produtos.gerarId(), "Bolsa Tricot Bege", "M", "Bege", 150));
    produtos.cadastrar(new BolsaAvulsa(produtos.gerarId(), "Bolsa Tricot Preta", "P", "Preta", 100));

    produtos.cadastrar(new ColecaoBolsas(produtos.gerarId(), "Bolsa Inverno", "G", "Marrom", 180, 1, "Coleção Inverno"));
}

main();