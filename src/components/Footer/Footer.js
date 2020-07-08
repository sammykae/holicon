import React from 'react';
import './footer.css'

const Footer = () => {
    const date=new Date().getFullYear()
    return (
        <footer className="footer">
            
            <div className="text">
               
                <p>&copy; Holicon {date} - looks like we need a team name</p>
            </div>
        </footer>
    );
};

export default Footer;