function FooterTop() {
    const logo = [
        { url: '../../images/logo.svg', title: 'Sertt'},
    ];
    const adresse = (
        <>
            Z.I. de la Courtillère<br /> 
            2 rue de la Noue Guimante<br /> 
            77400 SAINT-THIBAULT-DES-VIGNES<br /> 
            France
        </>
    );
    const contact = (
        <>
            Contactez-nous <br />
            <a class="font_extrabold" href="tel :+33 1 60 27 23 23 ">+33 1 60 27 23 23</a><br />
            <a href="mailto : sertt@orange.fr">sertt@orange.fr</a>
        </>
    );

    return (
        <div class="footer_top">
				<div class="container">
					<div class="footer_wrapper d-flex flex-wrap border_left">
						<div class="footer_item logo col-xs-12 col-sm-4 col-md-4">
							<div class="footer_item_cover">
                                {logo.map((item, index) => (
                                    <img key={index} class="wow slideInUp" src={item.url} alt={item.title} />
                                ))}
							</div>
						</div>
						<div class="footer_item adresse col-xs-12 col-sm-4 col-md-4">
							<div class="footer_item_cover">
                                {adresse}
							</div>
						</div>
						<div class="footer_item contact col-xs-12 col-sm-4 col-md-4">
							<div class="footer_item_cover">
                                {contact}
							</div>
						</div>

					</div>
				</div>
			</div>
    );
}
  
export default FooterTop;