import React from "react";

function App() {
    const cardData = [
        {
            id: 1,
            title: "Black Coffee",
            text: "Svart kaffe är så enkelt som det kan bli med",
            image: "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            title: "Card 2",
            text: "This is the second card.",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            title: "Card 3",
            text: "This is the third card.",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="container">
            <div className="row">
                {cardData.map((card) => (
                    <div className="col-md-3 mb-4" key={card.id} style={{marginBottom:'450px'}}>
                       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                        <div className="card h-100">
                            <img
                                src={card.image}
                                className="card-img-top"
                                style={{width:'auto',height:'250px' ,boxShadow:'8px 8px 12px 8px rgba(0, 0, 0, 0.2), 0 8px 25px 0 rgba(0, 0, 0, 0.19)'}}
                                alt={card.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
