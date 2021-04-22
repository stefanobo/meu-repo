let notaCandidato = 100;
notaCandidato = 80;
if (notaCandidato >= 80){
    console.log("Parabéns, voce foi aprovado!")

} else if (notaCandidato < 80 && notaCandidato >= 60) {
    console.log("Voce esta na lista de espera")
} else {
    console.log("Vc foi reprovado")
};

switch (notaCandidato) {
    case (>= 80):
        console.log('Parabéns, voce foi aprovado!');
        break;
    case notaCandidato < 80 && notaCandidato >= 60:
        console.log("Voce esta na lista de espera")
        break;
    case (notaCandidato < 60):
        console.log('Vc foi reprovado');
        break;
    default:
        console.log("nao se aplica");
        break;
}