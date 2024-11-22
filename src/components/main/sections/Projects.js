import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel';

function SectionProjects() { 

    useEffect(() => {
        $('.sliderreal').slick({
          arrows: true,
          dots: false,
          swipeToSlide: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          margin: 25,
          autoplay: true,
          centerMode: true,
          centerPadding: '120px',
          responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                centerMode: false,
                centerPadding: '0',
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                centerMode: false,
                centerPadding: '0',
              },
            },
          ],
        });
      
        return () => {
          if ($('.sliderreal').slick) {
            $('.sliderreal').slick('unslick');
          }
        };
    }, []);      


    const suptitle = [
        { number: '04', title: 'Réalisations'}
    ];  
    const background = "#2f45d0"; 
    const title = (
        <>
            Installations <br /> <span className='font_extrabold'>Sur mesure</span>
        </>
    );
    const listprojects = [
        { url: '../../images/IMG_5702.png', title: 'Réalisation 1'},
        { url: '../../images/IMG_5703.png', title: 'Réalisation 2'},
        { url: '../../images/IMG_5704.png', title: 'Réalisation 3'},
        { url: '../../images/IMG_5705.png', title: 'Réalisation 4'}
    ];
    

    return (
        <section id="sertt_realisations" className="sertt_realisations custom_section" style={{ background }}>
            <div className="container">
                <div className="sertt_realisations_cover d-flex flex-wrap border_left">
                    {suptitle.map((item, index) => (
                        <div className="sup_title w-100" key={index}>
                            <div className="number font_extrabold" style={{ background }}>{item.number}</div>
                            {item.title}
                        </div>
                    ))}
                    <h2 className="custom_title wow slideInUp">{title}</h2>
                    <div className="liste sliderreal wow slideInUp w-100">
                        {listprojects.map((project, index) => (
                            <div key={index} className="real_item">
                                <div className="real_item_cover">
                                    <div className="real_image">
                                        <img src={project.url} alt={project.title} />
                                    </div>
                                    <div className="real_title text-end">{project.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
  
export default SectionProjects;