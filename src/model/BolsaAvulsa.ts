import { Produto } from "./Produto"
import { Colors } from '../util/Colors'

export class BolsaAvulsa extends Produto {
    
	constructor(
		id: number,
		nome: string,
		tamanho: string,
		cor: string,
		preco: number,
	) {
		super(id, nome, tamanho, cor, preco); 
	}

	public visualizar(): void {
		    console.log(Colors.fg.magentastrong,"┌────────────────────────────────────┐");
        console.log(" │           Bolsa Avulsa             │");
        console.log(" │────────────────────────────────────│");
        console.log(` │   ID: ${this.id}                   │`);
        console.log(` │   Nome: ${this.nome}               │`);
        console.log(` │   Tamanho: ${this.tamanho}         │`);
        console.log(` │   Cor: ${this.cor}                 │`);
        console.log(` │   Preço: ${this.preco}             │`);
        console.log(" └────────────────────────────────────┘", Colors.reset);
	}
}