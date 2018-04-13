import { MegaMenuModel } from './mega-menu/mega-menu.model';
import { HeaderDescription } from './header-description/header-description.model';
import { ProductButton } from './product-button/product-button.model';
import { ProductCards } from './product-cards/product-cards.model';
import { HeaderBanner } from './header-banner/header-banner.model';
import { ShopNow } from './shop-now/shop-now.model';
import { HeaderBar } from './header-bar/header-bar.model';


export interface AppState {
    readonly megamenu: MegaMenuModel[];
    readonly shopnow: ShopNow;
    readonly productbutton: ProductButton;
    readonly headerbanner: HeaderBanner;
    readonly productcards: ProductCards;
    readonly headerbar: HeaderBar;
}