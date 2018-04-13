import { ShopNow } from '../shop-now/shop-now.model';
import { Action } from "@ngrx/store";

export const SHOP_NOW = "SHOP_NOW";


export function shopNowReducer(state: ShopNow[] = [], action) {
    switch (action.type) {
        case SHOP_NOW:
            return [...state, action.payload];
        case 'CLEAR_SHOP_NOW':
            state = undefined;
        default:
            return state;
    }
}