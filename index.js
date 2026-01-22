let formular = window.document.querySelector('#formulario');
let btn1 = document.querySelector('.botao1');
let valor = document.querySelector('.ppt');
let imagem = document.querySelector('.img');
const btn2 = document.querySelector('.btn2');
const ppt = ['Pedra', ' Papel', ' Tesoura'];
let tet = document.querySelector('.txt');
let img = document.querySelector('.foto');
let player1;
let player2;
const btn3 = document.querySelector('.botao3');
let placarPlayer1 = 0;
let placarPlayer2 = 0;
let mostrapl1 = window.document.querySelector('#placar1');
let mostrapl2 = window.document.querySelector('#placar2');
let showWiner = document.querySelector('#txtwinner');



formular.addEventListener("submit", function trye(event) {
    event.preventDefault();
    let para = document.createElement('p');
    if (valor.value === 'pedra' || valor.value === 'Pedra') {
        formular.appendChild(para);
        para.innerHTML += ppt[0]
        formular.appendChild(imagem)
        imagem.src = 'imgs-jokenpo/pedra.png'
        valor.value = ''
        player1 = ppt[0]
    } else if (valor.value === 'tesoura' || valor.value === 'Tesoura') {
        formular.appendChild(para);
        para.innerHTML += ppt[2]
        formular.appendChild(imagem)
        imagem.src = 'imgs-jokenpo/tesoura.jpg'
        valor.value = ''
        player1 = ppt[2]
    } else if (valor.value === 'papel' || valor.value === 'Papel') {
        formular.appendChild(para);
        para.innerHTML += ppt[1]
        formular.appendChild(imagem)
        imagem.src = 'imgs-jokenpo/papel.png'
        valor.value = ''
        player1 = ppt[1]
    } else {
        alert('Valor invalido')
        valor.value = ''
    }


});
function gera() {
    let rps = Math.round(Math.random() * 3)
    if (rps === 0) {
        img.src = 'imgs-jokenpo/pedra.png'
        tet.innerHTML += ppt[rps]
        player2 = ppt[rps]
    } else if (rps === 1) {
        img.src = 'imgs-jokenpo/papel.png'
        tet.innerHTML += ppt[rps]
        player2 = ppt[rps]
    }
    else if (rps === 2) {
        img.src = 'imgs-jokenpo/tesoura.jpg'
        tet.innerHTML += ppt[rps]
        player2 = ppt[rps]
    }
}

function result() {
    if (player1 === ppt[0] && player2 === ppt[2]
        || player1 === ppt[1] && player2 === ppt[0]
        || player1 === ppt[2] && player2 === ppt[1]
    ) {
        placarPlayer1 += 1
        showWiner.innerText = `O jogador 1 venceu a partida`;
        mostrapl1.innerText = ` Placar jogador 1: ${placarPlayer1}`
    } else if (player1 === ppt[0] && player2 === ppt[0]
        || player1 === ppt[1] && player2 === ppt[1]
        || player1 === ppt[2] && player2 === ppt[2]) {
        showWiner.innerText = `Os jogadores empataram, ninguem pontuou nessa rodada`;
    }

    else {
        placarPlayer2 += 1
        showWiner.innerText = `O jogador 2 venceu a partida`;
        mostrapl2.innerText = `Placar jogador 2: ${placarPlayer2}`
    };

}
btn2.addEventListener('click', gera())
btn3.addEventListener('click', result())