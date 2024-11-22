//import $ from 'jquery';
//import Menu from './Menu';
//import Logo from './Logo';
import SectionBanner from './sections/Banner';
import SectionAboutus from './sections/Aboutus';
import SectionPartners from './sections/Partners';
import SectionServices from './sections/Services';
import SectionProjects from './sections/Projects';
import SectionContact from './sections/Contact';

function Main() {
    
    return (
        <>
            <SectionBanner />
            <SectionAboutus />
            <SectionPartners />
            <SectionServices />
            <SectionProjects />
            <SectionContact />
        </>
    );

}
  
export default Main;