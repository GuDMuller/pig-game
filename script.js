'use strict';

//selecionando elementos
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//condição inicial
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// função de rodar o dado

btnRoll.addEventListener('click', function () {
  //1. Gerar uma rolagem de dado aleatória
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Mostrar o dado
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. checar se o dado caiu 1

  if (dice !== 1) {
    // adicionar o dado a pontuação atual
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // passar o turno para o proximo jogador
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
