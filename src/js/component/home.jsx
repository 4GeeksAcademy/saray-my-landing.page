import React from "react";
import Navbar from "./navbar.jsx"; 
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import './background.css';



const Home = () => {
    const cards = [
        {
            image: "https://i.pinimg.com/736x/a6/fa/e8/a6fae86875bd4dcf4fd73408dc04502f.jpg",
            title: "Flores",
            description: "some flowers!",
        },
        {
            image: "https://i.pinimg.com/736x/99/32/a7/9932a74e6cd8e3f767b35bdf551235db.jpg",
            title: "Flores",
            description: "some flowers!",
        },
        {
            image: "https://i.pinimg.com/736x/0c/b5/1b/0cb51b4e2a751e9dffd3e9a85a84a950.jpg",
            title: "Colibrí",
            description: "some flowers!",
        },
        {
            image: "https://i.pinimg.com/736x/45/40/a9/4540a93e11b9f83f3ae3fe85dfaa751d.jpg",
            title: "Flores",
            description: "some flowers!",
        }
    ];
    return (
        <div className="text-center">
            <Navbar />
            <Jumbotron />
            <div className="container">
                <div className="row">
                    {cards.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                            <Card cards={item} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home; 