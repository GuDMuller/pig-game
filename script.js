'use strict';

//selecionando elementos

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//condição inicial
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// função de rodar o dado

btnRoll.addEventListener('click', function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Adicionar a pontuação atual para o player ativo
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Checar se a pontuação do player é >= 100
    if (scores[activePlayer] >= 20) {
      //encerrar o jogo
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
      // Trocar de player
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
