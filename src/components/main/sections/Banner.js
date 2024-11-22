function SectionBanner() { 
    const image = [
        { url: '../../images/banniere.png', title: 'Sertt'}
    ];   
    const title = (
        <>
          CONSTRUIRE <br />
          <span className='font_extrabold'>UN FUTUR</span>
          <br />
          PLUS FORT
        </>
    );
    const desc = "Fournir des solutions d’enrichissement aux industriels du traitement thermique, et ce, en tenant compte du besoin de chacun.";
    const link = [
        { url: '#', title: 'En savoir plus'}
    ];  

    return (
        <section id="sertt_banner" className="sertt_banner">
            <div class="banniere_image d-none d-md-block">
                {image.map((item, index) => (
                    <img src={item.url} alt={item.title} />
                ))}
            </div>
            <div class="container">
        		<div class="sertt_banner_cover border_left">
                    <h1 class="title">
                        {title}
                    </h1>
                    <div class="desc">
                        {desc}
                    </div>
                    <div class="link">
                        {link.map((item, index) => (
                            <a href={item.url} title={item.title}>{item.title}</a>
                        ))}
                    </div>
        		</div>
        	</div>
        </section>
    );
}
  
export default SectionBanner;