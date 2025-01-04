import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../src/navbar';
import "../src/SearchBar.css";
import Footer from '../src/footer';
import oops from "../src/oops.png";
export default function CoffeeDrinks(props) {
  const { cart, setCart } = useContext(CartContext);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); 
  const itemsPerPage = 8;



  const cardData = [
    {
      id: 1,
      title: "Chai Latte",
      text: "Om du letar efter en smakfull varm dryck mitt i vintern.",
      image: "https://images.unsplash.com/photo-1578899952107-9c390f1af1b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWklMjBsYXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
      rating1:"fa fa-star checked",
      rating2:"fa fa-star checked",
      rating3:"fa fa-star checked",
      rating4:"fa fa-star checked",
      rating5:"fa fa-star",
      price:250,
      price2:155
      },
   
    {
      id: 2,
      title: "Latte",
      text: "Som den mest populära kaffedrycken där ute består",
      image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
      rating1:"fa fa-star checked",
      rating2:"fa fa-star checked",
      rating3:"fa fa-star checked",
      rating4:"fa fa-star checked",
      rating5:"fa fa-star",
      price:350,
      price2:180
  },

  {
      id: 3,
      title: "Caramel Latte",
      text: "Om du gillar latte med en speciell smak kan karamell",
      image: "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating1:"fa fa-star checked",
      rating2:"fa fa-star checked",
      rating3:"fa fa-star checked",
      rating4:"fa fa-star",
      rating5:"fa fa-star",
      price:520,
      price2:350
  },
  {
    id: 4,
    title: "Cappuccino",
    text: "Cappuccino är en latte som är gjord med mer skum ",
    image: "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating1:"fa fa-star checked",
    rating2:"fa fa-star checked",
    rating3:"fa fa-star checked",
    rating4:"fa fa-star checked",
    rating5:"fa fa-star",
    price:260,
    price2:220
},

{
  id: 5,
  title: "Apelsinjuice",
  text: "Vi har inget att säga om vår nypressade apelsinjuice.",
  image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fG9yYW5nZSUyMGp1aWNlfGVufDB8fDB8fHww",
  rating1:"fa fa-star checked",
  rating2:"fa fa-star checked",
  rating3:"fa fa-star checked",
  rating4:"fa fa-star checked",
  rating5:"fa fa-star",
  price:250,
  price2:130

},



{
id: 6,
title: "Hot Chocolate",
text: "Under kalla vinterdagar får en kopp varm choklad dig ",
image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
rating1:"fa fa-star checked",
rating2:"fa fa-star checked",
rating3:"fa fa-star checked",
rating4:"fa fa-star checked",
rating5:"fa fa-star",
price:450,
price2:250
},

{ 
  id: 7,
  title: "Black Coffee",
  text: "Svart kaffe är så enkelt som det kan bli med",
  image: "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating1: "fa fa-star checked",
  rating2: "fa fa-star checked",
  rating3: "fa fa-star checked",
  rating4: "fa fa-star",
  rating5: "fa fa-star",
  price: 250,
  price2: 150
},






{
id: 8,
title: "Lemonad",
text: "Var känd i Paris först och blev sedan mycket.",
image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D",
rating1:"fa fa-star checked",
rating2:"fa fa-star checked",
rating3:"fa fa-star checked",
rating4:"fa fa-star",
rating5:"fa fa-star",
price:350,
price2:299
},
{
id: 9,
title: "Islatte Mocha",
text: "Iced latte Mocha är en kombination av latte och mocha.",
image: "https://images.unsplash.com/photo-1642647391072-6a2416f048e5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGljZWQlMjBtb2NoYSUyMGxhdHRlfGVufDB8fDB8fHww",
rating1:"fa fa-star checked",
rating2:"fa fa-star checked",
rating3:"fa fa-star checked",
rating4:"fa fa-star",
rating5:"fa fa-star",
price:250,
price2:229
},
{
  id: 10,
  title: "Frozen Lemonade",
  text: "Frozen lemonade är en uppfriskande sommardryck som kombinerar färskpressad citronsaft.",
  image: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlbW9uYWRlJTIwd2l0aCUyMGljZXxlbnwwfHwwfHx8MA%3D%3D",
  rating1:"fa fa-star checked",
  rating2:"fa fa-star checked",
  rating3:"fa fa-star checked",
  rating4:"fa fa-star checked",
  rating5:"fa fa-star",
  price:350,
  price2:309
  },

  {
    id: 11,
    title: "Frapino Mocka",
    text: "Ännu en berömd och utsökt kall dryck för dem som föredrar choklad.",
    image: "https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhcGlubyUyMG1vY2hhfGVufDB8fDB8fHww",
    rating1:"fa fa-star checked",
    rating2:"fa fa-star checked",
    rating3:"fa fa-star checked",
    rating4:"fa fa-star checked",
    rating5:"fa fa-star",
    price:220,
    price2:199
    },

    {
      id: 12,
      title: "Svart Te",
      text: "Svart te föddes i Kina. Det är tillverkat av blad från en växt som kallas.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYXxlbnwwfHwwfHx8MA%3D%3D",
      rating1:"fa fa-star checked",
      rating2:"fa fa-star checked",
      rating3:"fa fa-star checked",
      rating4:"fa fa-star",
      rating5:"fa fa-star",
      price:180,
      price2:140
      },

      {
        id: 13,
        title: "Seasonal Brew",
        text: "Säsongs kaffe med olika smaktoner som karamell, frukt och choklad",
        image: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxibGFjayUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
        rating1:"fa fa-star checked",
        rating2:"fa fa-star checked",
        rating3:"fa fa-star checked",
        rating4:"fa fa-star",
        rating5:"fa fa-star",
        price:240,
        price2:210
        },

        {
          id: 14,
          title: "Mocha",
          text: "För alla chokladälskare där ute kommer ni att bli förälskade i en mocha.",
          image: "https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          rating1:"fa fa-star checked",
          rating2:"fa fa-star checked",
          rating3:"fa fa-star checked",
          rating4:"fa fa-star checked",
          rating5:"fa fa-star",
          price:440,
          price2:400
          },

          {
            id: 15,
            title: "Matcha Latte",
            text: "Matcha latte är en grön, hälsosam kaffedryck med finkrossad matcha-te och mjölk, .",
            image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D",
            rating1:"fa fa-star checked",
            rating2:"fa fa-star checked",
            rating3:"fa fa-star checked",
            rating4:"fa fa-star checked",
            rating5:"fa fa-star",
            price:240,
            price2:180
            },
            {
              id: 16,
              title: "Frapino Caramel",
              text: "Det är en blandad eller bättre sagt skakad kaffe med vispad grädde på toppen.",
              image: "https://images.unsplash.com/photo-1662047102608-a6f2e492411f?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhcGlubyUyMGNhcmFtZWx8ZW58MHx8MHx8fDA%3D",
              rating1:"fa fa-star checked",
              rating2:"fa fa-star checked",
              rating3:"fa fa-star checked",
              rating4:"fa fa-star",
              rating5:"fa fa-star",
              price:260,
              price2:220
              },



    
  


  ];


  const filteredData = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );



const currentPageData = filteredData.slice(
  (page - 1) * itemsPerPage,
  page * itemsPerPage
 
  
);

  const handleNextPage = () => {
    if (page * itemsPerPage < filteredData.length) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleCount = (item) => {
    if (cart.some((product) => product.id === item.id)) {
      toast.error("Item is already added to your cart");
      return;
    }
    setCart([...cart, item]);
    toast.success(`${item.title} added to cart!`);
  };

  return (
    <>
      <Toaster />
      <header className="navbar">
        <Navbar size={cart.length} />
      </header>

      <title>{props.title2}</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Audiowide"
      />

      {/* Search Bar */}
      <div className="search-container">
        <form className="search-form"  onSubmit={(e) => {
            e.preventDefault();
          }}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1); 
            }}
          />
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      {/* Cards */}
      <div className="container">
  <div className="row">
    {filteredData.length === 0 ? (
      <div className="col-12 text-center" style={{ marginTop: "20px" }}>
        <h5 style={{ fontFamily: "Audiowide" }}>
          <img src={oops} style={{ height: "90px", width: "90px" }} alt="Oops" /> Item not available
        </h5>
      </div>
    ) : (
      currentPageData.map((card) => (
        <div
          className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3" 
          key={card.id}
          style={{ marginTop: "20px" }}
        >
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <div className="card h-100">
            <img
              src={card.image}
              className="card-img-top"
              style={{ width: "auto", height: "180px" }}
              alt={card.title}
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>

              <div className="rating">
                <span className={card.rating1}></span>
                <span className={card.rating2}></span>
                <span className={card.rating3}></span>
                <span className={card.rating4}></span>
                <span className={card.rating5}></span>
              </div>

              <div
                className="price"
                style={{
                  float: "right",
                  marginTop: "-40px",
               
                  fontSize: "12px",
                }}
              >
                <i className="fa fa-inr" aria-hidden="true">
                  <s>{card.price}</s>
                </i>
              </div>

              <div
                className="price2"
                style={{
                  float: "right",
                  marginTop: "-20px",
                  
                }}
              >
                <i className="fa fa-inr" aria-hidden="true">
                  {card.price2}
                </i>
              </div>

              <div className="button">
                <button
                  className="btn btn-outline-secondary"
                  style={{ marginTop: "5%" }}
                  onClick={() => handleCount(card)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
    )}
  </div>

  <div className="prevnextcont d-flex justify-content-between mb-3">
    <button
      disabled={page <= 1}
      style={{ border: "1px solid #FAF9F6", color: "black" ,marginBottom:'50px'}}
      onClick={handlePreviousPage}
    >
      &larr; Previous
    </button>
    <button
      disabled={page * itemsPerPage >= filteredData.length}
      style={{ border: "1px solid #FAF9F6", color: "black" ,marginBottom:'50px'}}
      onClick={handleNextPage}
    >
      Next &rarr;
    </button>
  </div>
</div>

      
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
