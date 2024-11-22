function FooterBottom() {
    const copyright = (
        <>
            Copyright © 2024 SERTT. Tous droits réservés.
        </>
    );
    const menus1 = [
        { texte: 'A propos', url: '#sertt_about'},
        { texte: 'Traitements thermiques', url: '#sertt_traitements_thermiques'},
        { texte: 'Services & Assistance', url: '#sertt_services'},
        { texte: 'Réalisations', url: '#sertt_realisations'},
        { texte: 'Nos sites', url: '#sertt_sites'}
    ];
    const menus2 = [
        { texte: 'Mentions légales', url: '#mentions-legales'}
    ];

    return (
        <div class="footer_bottom">
			<div class="container">
				<div class="footer_wrapper border_left">
					
					<div class="menu_footer">
                        <ul id="menu_wrapper" className="menu">
                            {menus1.map((menu, index) => (
                                <li key={index}><a href={menu.url} title={menu.texte}>{menu.texte}</a></li>
                            ))}
                        </ul>
					</div>

					<div class="copyright_footer d-flex flex-wrap">
						<div class="copyright">{copyright}</div>
						<div class="menu_bottom">
							<ul id="menu_wrapper" className="menu">
                                {menus2.map((menu, index) => (
                                    <li key={index}><a href={menu.url} title={menu.texte}>{menu.texte}</a></li>
                                ))}
                            </ul>
						</div>

					</div>

				</div>
			</div>
		</div>
    );
}
  
export default FooterBottom;