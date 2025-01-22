import React from "react";

const Footer = () => {
    return (
        <footer className="text-white text-center py-4" style={{ backgroundColor: '#FFC0CB' }}>
            <div className="container">
                <p> <small>Copyright &copy; Your Website {new Date().getFullYear()}</small></p> 
            </div>
        </footer>
    );
};

export default Footer;