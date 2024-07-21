function comprar(){
    var tipoIngresso = document.getElementById("tipo-ingresso").value;
    var quantidade = document.getElementById("qtd").value;
    var itemSelecionado = document.getElementById(`qtd-${tipoIngresso}`);
    var novaQuantidadeDisponivel = parseInt(itemSelecionado.innerHTML) - quantidade;

    if(novaQuantidadeDisponivel >= 0){
        itemSelecionado.innerHTML = novaQuantidadeDisponivel;
    }else{
        let nomeItem = tipoIngresso == "pista" ? tipoIngresso : "Cadeira " + tipoIngresso;

        alert(`Não há tantos ingressos disponíveis para ${nomeItem}.`);
    }
}