import { ProductButton } from "../product-button/product-button.model";
import { Action } from "@ngrx/store";

export const PRODUCT_BUTTON = "PRODUCT_BUTTON";

export function productButtonReducer(state: ProductButton[] = [], action) {
    switch (action.type) {
        case PRODUCT_BUTTON:
            return [...state, action.payload];
        case 'CLEAR_PRODUCT_BUTTON':
                state = undefined;
        default:
            return state;
    }
}
