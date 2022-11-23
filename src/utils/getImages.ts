import camel from '../images/camel.webp';
import coconut from '../images/coconut.webp';
import green from '../images/green.webp';
import lemon from '../images/lemon.webp';
import mars from '../images/mars.webp';
import pineapple from '../images/pineapple.png';
import rainbow from '../images/rainbow.webp';
import sheep from '../images/sheep.webp';
import snowball from '../images/snowball.webp';
import watermelon from '../images/watermelon.png';
import {ICard} from "../types/types";

export function getImages() {
    return {
        camel, coconut, green, lemon, mars, pineapple, rainbow, sheep, snowball, watermelon
    }
}
export function shuffle(array: ICard[]) {
   return  array.sort(() => Math.random() - 0.5);
}
