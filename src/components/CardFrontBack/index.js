// import './style.css';
import CardGame from '../CardGame';

const CardFrontBack = () => {
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