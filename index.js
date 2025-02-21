//heroi, exp , nivel
let heroNome = prompt("Qual o nome do heroi?")
let xpHero = Math.floor(Math.random() * 10000) + 1
let nivel = ""

do {
    if (xpHero < 1000) {
        nivel = "Ferro";
        break;
    } else if (xpHero >= 1001 && xpHero <= 2000) {
        nivel = "Bronze";
        break;
    } else if (xpHero >= 2001 && xpHero <= 5000) {
        nivel = "Prata";
        break;
    } else if (xpHero >= 5001 && xpHero <= 7000) {
        nivel = "Ouro";
        break;
    } else if (xpHero >= 7001 && xpHero <= 8000) {
        nivel = "Platina";
        break;
    } else if (xpHero >= 8001 && xpHero <= 9000) {
        nivel = "Ascendente";
        break;
    } else if (xpHero >= 9001 && xpHero <= 10000) {
        nivel = "Imortal";
        break;
    } else {
        nivel = "Radiante";
        break;
    }
} while (false);


console.log("O herói de nome " + heroNome + " está no nivel " + nivel)

