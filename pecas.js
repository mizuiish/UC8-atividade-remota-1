var listadePecas = ["Motor", "Amortecedor", "Freio", "Cambio", "Disco", "Radiador"]

if (listadePecas.length < 10) {
    console.log("É possível cadastrar mais itens.")
}else{
    console.log("Não tem mais espaço na lista.")
}

let peso = 50;
if (peso < 100){
    console.log("A peça deve pesar no mínimo 100 gramas.")
}else{
    console.log("A peça possui o peso adequado.")
}

let nomePeca = "Disco"

if (nomePeca.length > 3){
    console.log("O nome de peça está adequado para o cadastro.")
}else if (nomePeca;length == 0){
    console.log("O nome da peça não pode ser vazio.")
}else{
    console.log("O nome deve ter mais de 3 caracteres. Digite um nome adequado.")
}