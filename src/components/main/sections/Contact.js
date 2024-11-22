function SectionContact() { 
    const suptitle = [
        { number: '05', title: 'Nos sites'}
    ];  
    const background = "#eeeeee"; 
    const title = (
        <>
            Parc de <span className='font_extrabold'>générateurs</span>
        </>
    );
    const map = [
        { url: '../../images/map.png', title: 'Sertt'},
    ];
    const noscontacts = [
        {
            title: 'FRANCE',
            contenu: (
                <>  
                    <label>Site 1 :</label> 2 ALNAT G2x100D350F350<br />
                    <label>Site 2 :</label> 1 ALNAT G2x100D400F600<br />
                    2 ALNAT G2x50D350F35050<br />
                    <label>Site 3 :</label> 1 RPC2x100
                </>
            )
        },
        {
            title: 'BELGIQUE',
            contenu: (
                <>  
                    <label>Site 1 :</label> 2 Générateurs<br />
                    1 Maître RPC 2x100 - 1 Esclave RPC2x10<br />
                    <label>Site 2 :</label> 1 Générateur<br />
                    1 RPC 2x100
                </>
            )
        },
        {
            title: 'CHINE',
            contenu: (
                <>  
                    <label>Site 1 :</label> 2 Générateurs<br />
                    1 Maître RPC 2x100<br />
                    1 Esclave RPC100
                </>
            )
        },
        {
            title: 'ESPAGNE',
            contenu: (
                <>  
                    <label>Site 1 :</label> 1 Générateur RPC80<br />
                </>
            )
        },
        {
            title: 'ITALIE',
            contenu: (
                <>  
                    <label>Site 1 :</label> 2 ALNAT G2x100D350F400<br />
                    1 ALNAT G100D250F350<br />
                </>
            )
        },
        {
            title: 'INDE',
            contenu: (
                <>  
                    <label>Site 1 :</label> 1 Générateurs<br />
                    1 Maître RPC 2x100<br />
                    1 Esclave RPC2x100<br />
                    1 Esclave RPC100<br />
                </>
            )
        }
    ];

    return (
        <section id="sertt_sites" class="sertt_sites custom_section" style={{ background }}>
            <div class="container sertt_sites_title">
                <div class="sertt_sites_cover d-flex flex-wrap border_left_color border_left">
                    {suptitle.map((item, index) => (
                        <div className="sup_title w-100" key={index}>
                            <div className="number font_extrabold" style={{ background }}>{item.number}</div>
                            {item.title}
                        </div>
                    ))}
                    <div class="d-flex justify-content-between w-100 wow slideInUp">
                        <h2 class="custom_title">{title}</h2>
                    </div>
                </div>
            </div>
            <div class="sites_map text-center d-none d-lg-block wow slideInUp">
                <div class="border_map">
                    <div class="container">
                        <div class="sertt_sites_cover border_left_color border_left"></div>
                    </div>
                </div>
                {map.map((item, index) => (
                    <img class="wow slideInUp" src={item.url} alt={item.title} />
                ))}
            </div>
            <div id="sertt_contact" class="container sertt_sites_contact">
                <div class="sertt_sites_cover d-flex flex-wrap border_left_color border_left">
                    <div class="liste_sites d-flex flex-wrap wow slideInUp">
                        {noscontacts.map((contact, index) => (
                            <div key={index} class="site_item col-xs-12 col-sm-6 col-md-4 wow slideInUp">
                                <div class="site_item_cover">
                                    <div class="site_title">{contact.title}</div>
                                    <div class="site_infos">{contact.contenu}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
  
export default SectionContact;