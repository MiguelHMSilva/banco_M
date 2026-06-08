let visivel = false;
let saldo = 1000;

function trocarAba(aba) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    event.currentTarget.classList.add('active');
}

function toggleSaldo(){
    let campo = document.getElementById("saldo");
    let botao = document.getElementById("btn");

    if (visivel) {
        //escondendo saldo
        campo.innerText = "R$ ----";
        icone.src = "imagem/olhoFechado.png";
        visivel = false;
    } else {
        campo.innerText = "R$ " + saldo;
        icone.src = "imagem/olhoAberto.png";
        visivel = true;
    }
}