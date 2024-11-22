function MenuList() {

    const menus = [
        { texte: 'A propos', url: '#sertt_about'},
        { texte: 'Traitements thermiques', url: '#sertt_traitements_thermiques'},
        { texte: 'Services & Assistance', url: '#sertt_services'},
        { texte: 'Réalisations', url: '#sertt_realisations'},
        { texte: 'Nos sites', url: '#sertt_sites'}
    ];
    
    return (
        <div id="menusite" className="menu">
            <ul id="menu_site" className="menu_items d-flex flex-wrap align-items-center align-content-center">
                {menus.map((menu, index) => (
                    <li key={index}><a href={menu.url} title={menu.texte}>{menu.texte}</a></li>
                ))}
            </ul>
        </div>
    );
    
  }
  
  export default MenuList;
  