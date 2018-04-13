import { ProductCards } from '../product-cards/product-cards.model';
import { Action } from "@ngrx/store";

export const PRODUCT_CARDS = "PRODUCT_CARDS";


export function productCardsReducer(state: ProductCards[] = [], action) {
    switch (action.type) {
        case PRODUCT_CARDS:
            return [...state, action.payload];
        case 'CLEAR_PRODUCT_CARDS':
            state = undefined;
        default:
            return state;
    }
}