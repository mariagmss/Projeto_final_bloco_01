import { Colors } from './src/util/Colors';
import { Input } from './src/util/Input';

export function main() {

    let opcao: number;

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
                
                keyPress()
                break;
            case 2:
                console.log(Colors.fg.magentastrong, "\n\n Buscar por produtos\n\n", Colors.reset);

                keyPress()
                break;
            case 3:
                console.log(Colors.fg.magentastrong, "\n\n Listar todos os produtos\n\n", Colors.reset);

                keyPress()
                break;
            case 4:
                console.log(Colors.fg.magentastrong, "\n\n Atualizar dados do produto\n\n", Colors.reset);

                keyPress()
                break;
            case 5:
                console.log(Colors.fg.magentastrong, "\n\n Apagar um produto\n\n", Colors.reset);

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

function keyPress(): void {
    console.log(Colors.reset,"\nPressione enter para continuar...");
    Input.prompt();
}

main();