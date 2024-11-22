import MenuList from './menu/MenuList';

function HeaderLeft() {

    const logo = [
        { url: '#', image: '../../images/logo.svg', title: 'Sertt'}
    ];
    
    return (
        <div class="header_left d-flex flex-wrap align-items-center">
            <h1 class="site_logo d-flex align-items-center">
                {logo.map((item, index) => (
                    <a  key={index} href={item.url} title={item.title}>
                        <img src={item.image} alt={item.title} />
                    </a>
                ))}
            </h1>
            <div class="menu_sticky d-lg-none">
                <MenuList />
            </div>
        </div>
    );
}
  
export default HeaderLeft;
  