let visivel = false;
let saldo = 1000;

function trocarAba(aba) {
    $('.nav-item').removeClass('active');
    $(event.currentTarget).addClass('active');
}

function toggleSaldo(){
    if (visivel) {
        //escondendo saldo
        $("#saldo").text("R$ ----");
        $("#icone").removeClass("fa-eye").addClass("fa-eye-slash");
        visivel = false;
    } else {
        $("#saldo").text("R$ " + saldo);
        $("#icone").removeClass("fa-eye-slash").addClass("fa-eye");
        visivel = true;
    }
}