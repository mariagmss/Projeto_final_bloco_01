import * as iconv from 'iconv-lite';
 
export class Input {
    
    private static configurado = false;
   
    private static encodingConsole: string = 'cp850';

    private static detectarEncoding(): void {
       
        if (this.configurado) return;
       
        if (process.platform === 'win32') {
            try {
                const { execSync } = require('child_process');
                const resultado = execSync('chcp', { encoding: 'utf8' }).toString();
                const match = resultado.match(/\d+/);
               
                if (match) {
                    const codePage = match[0];
                   
                    this.encodingConsole = codePage === '65001' ? 'utf8' :
                                          codePage === '850' ? 'cp850' :
                                          codePage === '1252' ? 'cp1252' : `cp${codePage}`;
                }
            } catch (error) {
                this.encodingConsole = 'cp850';
            }
        } else {
            this.encodingConsole = 'utf8';
        }
        this.configurado = true;
    }
   
    static question(pergunta: string): string {
 
        this.detectarEncoding();
       
        const readlinesync = require('readline-sync');
       
        if (this.encodingConsole !== 'utf8') {

            const respostaRaw = readlinesync.question(pergunta, {
                encoding: 'binary'
            });
           
            const buffer = Buffer.from(respostaRaw, 'binary');
            return iconv.decode(buffer, this.encodingConsole);
 
        } else {
            return readlinesync.question(pergunta);
        }
    }
 
    static questionInt(pergunta: string): number {
        const readlinesync = require('readline-sync');
 
        return readlinesync.questionInt(pergunta, {
            limitMessage: "Digite um numero inteiro"
        });
    }

    static questionFloat(pergunta: string): number {
        const readlinesync = require('readline-sync');
 
        return readlinesync.questionFloat(pergunta, {
            limitMessage: "Digite um numero decimal"
        });
    }

    static keyInSelect(opcoes: string[], pergunta: string, config?: any): number {
        const readlinesync = require('readline-sync');
 
        return readlinesync.keyInSelect(opcoes, pergunta, config);
    }
 
    static prompt(): void {
        const readlinesync = require('readline-sync');
 
        readlinesync.prompt();
    }
   
    static getEncoding(): string {
        this.detectarEncoding();
 
        return this.encodingConsole;
    }
}
