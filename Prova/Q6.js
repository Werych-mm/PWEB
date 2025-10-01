console.log("Mostrar situação do aluno:");

Prova_01 = 8
Prova_02 = 6
Media = (Prova_01 + Prova_02) / 2

if (Media >= 6) {
    console.log("Aprovado");
} else if (Media >= 4 && Media < 6) {
    console.log("Recuperação");
} else if (Media < 4) {
    console.log("Reprovado");
}
