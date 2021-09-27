import './style.css';

const CardGame = (icon = 'pixel', alt = 'Logo Pixel') => {
    return /*html*/`
        <article class="card-game">
            <img src="./src/images/${icon}.png" alt="${alt}" />
        </article>
    `;
}

export default CardGame;

