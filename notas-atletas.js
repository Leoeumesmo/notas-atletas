class atletas {
    constructor(nome, notas){
        this.nome = nome;
        this.notas = notas;
    }
    obterNome(){
        return `Atleta ${this.objatletas.nome}`
    }
    obterNotas(){
        return `Notas Obtidas ${this.objatletas.notas}`
    }
    obterMedia(){
        this.notas = this.notas.sort();
   this.notas = this.notas.slice(1, 4);
   let soma = 0
   this.notas.forEach(function(soma, nota){
       soma = soma + nota
   })
   return `Média Válida: ${soma / this.notas.length}`
    }
}

let objatletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

for (let i = 0; i < objatletas.length; i++) {
    console.log(obterNome())
    console.log(obterNotas())
    console.log(obterMedia())
}
