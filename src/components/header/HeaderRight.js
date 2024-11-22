function HeaderRight() {

    const contact = [
        { url: '#', title: 'Contact'}
    ];
    
    return (
        <div className="header_right d-none d-lg-flex align-items-center">
            <div className="header_contact">
                {contact.map((item, index) => (
                    <a  key={index} href={item.url} title={item.title}>
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    );
}
  
export default HeaderRight;