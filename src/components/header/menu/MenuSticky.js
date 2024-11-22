//import $ from 'jquery';
//import Menu from './Menu';
import HeaderLeft from '../HeaderLeft';
import HeaderRight from '../HeaderRight';
import MenuBurger from './MenuBurger';

function MenuSticky() {    
    return (
        <div class="header_sticky">
            <div class="container">
                <div class="header_sticky_cover d-flex flex-wrap justify-content-between align-items-center">
                    <HeaderLeft />
                    <HeaderRight />
                    <MenuBurger />
                </div>
            </div>
        </div>
    );
}
  
export default MenuSticky;