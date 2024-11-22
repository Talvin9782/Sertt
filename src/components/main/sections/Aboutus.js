function SectionAboutus() { 
    const suptitle = [
        { number: '01', title: 'A propos'}
    ];  
    const background = "#eeeeee"; 
    const title = (
        <>
          ENGAGÉE ENVERS <br />
          <span className='font_extrabold'>L’INNOVATION</span>
        </>
    );
    const desc1 = "SERTT est une société pionnière dans le domaine du traitement thermique depuis plus de 25 ans. Forts de notre expertise et de notre engagement envers l’innovation, nous sommes devenus un acteur mondial de premier plan, offrant des solutions avancées et personnalisées à nos clients dans divers secteurs industriels.";
    const desc2 = "Fondée en 1999, SERTT a débuté en tant que petite entreprise familiale spécialisée dans la conception de générateurs endothermique. Grâce à notre engagement constant envers la qualité et désireux de développer de nouveaux marchés, Arnaud NGUYEN VAN HO a repris la société en 2013 et a rapidement étendu les activités à l’échelle internationale.";
    const desc3 = "Aujourd’hui, grâce à notre parc de générateurs endothermique à la pointe de la technologie nous avons su créer des partenariats commerciaux avec de grands donneurs d’ordres tels que : ZF - Air Liquide - AMIS (groupe SIFCOR) - DYTSA … pour ne citer que ceux-ci.";
    const link = [
        { url: '#', title: 'Nos services'}
    ];  

    return (
        <section id="sertt_about" className="sertt_about custom_section" style={{ background }}>
            <div className="container">
                <div className="sertt_about_cover d-flex flex-wrap border_left_color border_left">
                        {suptitle.map((item, index) => (
                            <div className="sup_title" key={index}>
                                
                                <div class="number font_extrabold" style={{ background }}>{item.number}</div>
                                {item.title}
                                
                            </div>
                        ))}
                        <div className="left col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <h2 className="custom_title wow slideInUp">{title}</h2>
                            <div className="desc description_1 wow slideInUp">{desc1}</div>
                            <div className="link d-none d-lg-block wow slideInUp">
                                {link.map((item, index) => (
                                    <a key={index} href={item.url} title={item.title}>{item.title}</a>
                                ))}
                            </div>
                        </div>
                        <div className="right col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex flex-wrap">
                            <div className="right_text d-flex flex-wrap wow slideInUp">
                                <div className="desc col-sm-12 col-md-6">{desc2}</div>
                                <div className="desc col-sm-12 col-md-6">{desc3}</div>
                            </div>
                        </div>
                        <div className="link d-block d-lg-none wow slideInUp">
                            {link.map((item, index) => (
                                <a key={index} href={item.url} title={item.title}>{item.title}</a>
                            ))}
                        </div>
                </div>
            </div>
        </section>
    );
}
  
export default SectionAboutus;