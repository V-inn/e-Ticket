function comprar(){
    var quantidade = document.getElementById("qtd").value;

    if(quantidade < 1){
        alert("Quantidade deve ser maior que 0");
        return;
    }else if(quantidade > 10){
        alert("O limite por compra são 10 ingressos");
        return;
    }

    var tipoIngresso = document.getElementById("tipo-ingresso").value;
    var itemSelecionado = document.getElementById(`qtd-${tipoIngresso}`);
    var novaQuantidadeDisponivel = parseInt(itemSelecionado.innerHTML) - quantidade;

    if(novaQuantidadeDisponivel >= 0){
        itemSelecionado.innerHTML = novaQuantidadeDisponivel;
    }else{
        let nomeItem = tipoIngresso == "pista" ? tipoIngresso : "Cadeira " + tipoIngresso;

        alert(`Não há tantos ingressos disponíveis para ${nomeItem}.`);
    }
}