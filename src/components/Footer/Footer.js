import React from 'react';
import './footer.css'

const Footer = () => {
    const date=new Date().getFullYear()
    return (
        <footer className="footer">
            
            <div className="text">
               
                <p>&copy; AshroDev - Innovative IT Solution</p>
                <p>{date}</p>
            </div>
        </footer>
    );
};

export default Footer;