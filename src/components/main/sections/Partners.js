function SectionPartners() { 
    const suptitle = [
        { number: '02', title: 'TRAITEMENTS THERMIQUES'}
    ];  
    const background = "#fff"; 
    const title = (
        <>
          PARTENAIRES <span className='font_extrabold'>PRIVILÉGIÉS</span>
        </>
    );
    const desc = "Notre mission est de fournir solutions de gestion d’atmosphère lors des traitements thermiques de haute qualité qui répondent aux besoins spécifiques de chaque client. Nous nous efforçons de devenir le partenaire privilégié dans notre domaine grâce à une approche centrée sur le client, une innovation continue et un engagement envers l'excellence opérationnelle.";
    const link = [
        { url: '#', title: 'Nos réalisations'}
    ];
    const images = [
        { url: '../../images/electricite.png', title: 'Electricité de France'},
        { url: '../../images/air-liquide.png', title: 'Air liquide'}
    ];

    return (
        <section id="sertt_traitements_thermiques" class="traitements_thermiques custom_section" style={{ background }}>
            <div class="container">
                <div class="traitements_thermiques_cover d-flex flex-wrap border_left_color border_left">
                        {suptitle.map((item, index) => (
                            <div className="sup_title" key={index}>
                                <div class="number font_extrabold" style={{ background }}>{item.number}</div>
                                {item.title}
                            </div>
                        ))}
                        <div class="left col-xs-12 col-sm-12 col-md-12 col-lg-7">
                            <h2 class="custom_title wow slideInUp">{title}</h2>
                            <div class="desc description wow slideInUp">{desc}</div>
                        </div>
                        <div class="right col-xs-12 col-sm-12 col-md-12 col-lg-5 d-flex flex-wrap">
                            <div class="link w-100 text-lg-end wow slideInUp">
                                {link.map((item, index) => (
                                    <a key={index} href={item.url} title={item.title}>{item.title}</a>
                                ))}
                            </div>
                            <div class="images d-flex align-items-end w-100 justify-content-lg-end justify-content-start wow slideInUp">
                                {images.map((image, index) => (
                                    <div key={index} class="image_item">
                                        <img src={image.url} alt={image.title} />
                                    </div>
                                ))}
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}
  
export default SectionPartners;