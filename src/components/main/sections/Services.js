function SectionServices() { 
    const suptitle = [
        { number: '03', title: 'TRAITEMENTS THERMIQUES'}
    ];  
    const background = "#fff"; 
    const title = (
        <>
            PARTENAIRES <span className='font_extrabold'>PRIVILÉGIÉS</span>
        </>
    );
    const link = [
        { url: '#', title: 'Nos réalisations'}
    ];
    const leftservices = [
        { title: 'CONCEPTION DE GÉNÉRATEURS CLÉ EN MAIN', contenu: 'Electricité de France' },
        { title: 'PRESTATION D’AUTOMATISME', contenu: 'Electricité de France' },
        { title: 'RÉALISATION D’ARMOIRES ÉLECTRIQUES, COFFRETS OU BAIES D’ANALYSES', contenu: 'Electricité de France' },
        {
            title: 'MAINTENANCE & TÉLÉSURVEILLANCE',
            contenu: (
                <>
                    - Contrat de maintenance,<br /> 
                    - Intervention de dépannage d’installation toutes marques,<br /> 
                    - Télésurveillance de nos générateurs
                </>
            )
        }
    ];
    const rightservices = [
        { 
            title: 'LOCATION DE MATÉRIEL D’ANALYSE', 
            contenu: (
                <>
                    - Analyseur SIEMENS ULTRAMAT 23,<br /> 
                    - Contrôleur de point de Rosée Dewchecker 1.1
                </>
            )
        },
        {
            title: 'VENTE DE PIÈCES DÉTACHÉES',
            contenu: (
                <>  
                    - Thermocouples & tubes céramique,<br /> 
                    - Catalyseurs,<br /> 
                    - Convertisseurs,<br /> 
                    - Pièces de forme spécifiques en matière réfractaire,<br /> 
                    - Pièces d’Automate Programmable Industriel et IHM,<br /> 
                    - Cornue avec ou sans contrôle radiographique,<br /> 
                    - Joints (découpe spécifique),<br /> 
                    - Régulateurs de proportion & matériel de débitmètrie suivant demande,<br /> 
                    - Régulateurs de débit massique (CH4, C3H8, Air, N2…)
                </>
            )
        }
    ];

    return (
        <section id="sertt_services" class="sertt_services custom_section" style={{ background }}>
            <div class="container">
                <div class="sertt_services_cover d-flex flex-wrap border_left_color border_left">
                    {suptitle.map((item, index) => (
                        <div className="sup_title w-100" key={index}>
                            <div class="number font_extrabold" style={{ background }}>{item.number}</div>
                            {item.title}
                        </div>
                    ))}

                    <h2 class="custom_title w-100 wow slideInUp">{title}</h2>
                            
                    <div class="left col-xs-12 col-sm-12 col-md-12 col-lg-7">
                        {leftservices.map((service, index) => (
                            <div key={index} class="serv_item wow slideInUp">
                                <div class="serv_title d-flex">{service.title}</div>
                                <div class="serv_desc">{service.contenu}</div>
                            </div>
                        ))}
                    </div>

                    <div class="right col-xs-12 col-sm-12 col-md-12 col-lg-5 d-flex flex-wrap">
                        {rightservices.map((service, index) => (
                            <div key={index} class="serv_item wow slideInUp">
                                <div class="serv_title d-flex">{service.title}</div>
                                <div class="serv_desc">{service.contenu}</div>
                            </div>
                        ))}

                        <div class="link link_bg w-100 wow slideInUp d-none d-lg-block">
                            {link.map((item, index) => (
                                <a className="d-block" key={index} href={item.url} title={item.title}>{item.title}</a>
                            ))}
                        </div>
                        
                        <div class="link link_bg w-100 wow slideInUp d-block d-lg-none">
                            {link.map((item, index) => (
                                <a className="d-block" key={index} href={item.url} title={item.title}>{item.title}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
  
export default SectionServices;