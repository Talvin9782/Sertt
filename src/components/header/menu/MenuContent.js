//import $ from 'jquery';
//import Menu from './Menu';
import HeaderRight from '../HeaderRight';
import MenuList from './MenuList';

function MenuContent() {    
    return (
        <div class="header_menu">
            <div class="container">
                <div class="header_menu_cover">
                    <MenuList />
                    <HeaderRight />
                </div>
            </div>
        </div>
    );
}
  
export default MenuContent;