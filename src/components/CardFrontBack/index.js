import './style.css';
import CardGame from '../CardGame';

const CardFrontBack = () => {
  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
    // target pega o elemento clicado, a origem do click, 
    // A propriedade event.target pode ser usada para implementar a delegação de eventos.
    const $origin = event.target;
    // parentNode pega elemento pai anterior, sobe na arvore de elementos html
    // const $cardFrontBack = $origin.parentNode.parentNode.parentNode;

    // closest pega o elemento mais próximo
    const $cardFrontBack = $origin.closest('.card-front-back');
    // adiciona uma classe css no elemento
    $cardFrontBack.classList.toggle('-active');
  }

  return /*html*/ `
  <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
    <div class="card -front">
      ${CardGame()}
    </div>
    <div class="card -back">
      ${CardGame("javascript", "Logo do JavaScript")}
    </div>
  </article>
  `;
}

export default CardFrontBack;