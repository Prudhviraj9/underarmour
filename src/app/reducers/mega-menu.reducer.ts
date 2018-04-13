import { MegaMenuModel } from "../mega-menu/mega-menu.model";
import { Action } from "@ngrx/store";

export const MEGA_MENU = "MEGA_MENU";

export function megaMenuReducer(state: MegaMenuModel[] = [], action) {
    switch (action.type) {
        case MEGA_MENU:
            return [...state, action.payload];
        case 'CLEAR_MEGA_MENU':
            state = undefined;
        default:
            return state;
    }
}
