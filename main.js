import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css'; // varibles
import './src/styles/elements/base.css';

import CardGame from "./src/components/CardGame";

const $root = document.querySelector("#root");

const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);