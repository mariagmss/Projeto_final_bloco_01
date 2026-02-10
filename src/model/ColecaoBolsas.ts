import { Produto } from "./Produto";
import { Colors } from "../util/Colors";

export class ColecaoBolsas extends Produto {

    private idColecao: number;
    private nomeColecao: string;

    constructor(
        id: number,
        nome: string,
        tamanho: string,
        cor: string,
        preco: number,
        idColecao: number,
        nomeColecao: string
    ) {
        super(id, nome, tamanho, cor, preco);
        this.idColecao = idColecao;
        this.nomeColecao = nomeColecao;
    }

    public visualizar(): void {

        console.log(Colors.fg.magentastrong,"┌────────────────────────────────────┐");
        console.log(" │          Bolsas de Coleção         │");
        console.log(" │────────────────────────────────────│");
        console.log(` │   ID: ${this.id}                   │`);
        console.log(` │   Coleção : ${this.nomeColecao}    │`);
        console.log(` │   Tamanho: ${this.tamanho}         │`);
        console.log(` │   Cor: ${this.cor}                 │`);
        console.log(` │   preço: ${this.preco}             │`);
        console.log(" └────────────────────────────────────┘", Colors.reset);
    }
}
