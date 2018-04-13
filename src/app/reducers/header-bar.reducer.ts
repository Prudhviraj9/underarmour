import { HeaderBar } from "../header-bar/header-bar.model";
import { Action } from "@ngrx/store";

export const HEADER_BAR = "HEADER_BAR";

export function headerBarReducer(state: HeaderBar[] = [], action) {
    switch (action.type) {
        case HEADER_BAR:
            return [...state, action.payload];
        default:
            return state;
    }
}
