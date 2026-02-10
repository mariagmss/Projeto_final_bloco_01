export abstract class Produto{

    private _id: number;
    private _nome: string;
    private _tamanho: string;
    private _cor: string;
    private _preco: number;

	constructor(id: number, nome: string, tamanho: string, cor: string, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tamanho = tamanho;
		this._cor = cor;
		this._preco = preco;
	}
	
	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tamanho(): string {
		return this._tamanho;
	}

	public get cor(): string {
		return this._cor;
	}

	public get preco(): number {
		return this._preco;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set tamanho(value: string) {
		this._tamanho = value;
	}

	public set cor(value: string) {
		this._cor = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}

	public abstract visualizar(): void;

}