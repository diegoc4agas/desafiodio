function rankingHeroi(vitoria, derrota) {
    return vitoria - derrota
}
let ranking = rankingHeroi(77, 7)

function levelHeroi(nivel) {
    if (ranking < 10) {
        nivel = "Ferro"
    } else if (ranking >= 11 && ranking <= 20) {
        nivel = "Bronze"
    } else if (ranking >= 21 && ranking <= 50) {
        nivel = "Prata"
    } else if (ranking >= 51 && ranking <= 80) {
        nivel = "Ouro"
    } else if (ranking >= 81 && ranking <= 90) {
        nivel = "Diamante"
    } else if (ranking >= 91 && ranking <= 100) {
        nivel = "Lendário"
    } else if (ranking >= 101) {
        nivel = "Imortal"
    }
    return nivel
}
let level = levelHeroi()

console.log("O Herói está no ranking: "+ranking+" e nível = "+level)

