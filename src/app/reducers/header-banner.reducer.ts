import { HeaderBanner } from "../header-banner/header-banner.model";
import { Action } from "@ngrx/store";

export const HEADER_BANNER = "HEADER_BANNER";

export function headerBannerReducer(state: HeaderBanner[] = [], action) {
    switch (action.type) {
        case HEADER_BANNER:
            return [...state, action.payload];
        default:
            return state;
    }
}
