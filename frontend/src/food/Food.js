import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import toast, { Toaster } from 'react-hot-toast';
import "../SearchBar.css";
import oops from "../oops.png";
import Navbar from '../navbar';
import Footer from '../footer';
export default function Food(props) {
  const { cart, setCart } = useContext(CartContext);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); 
  const itemsPerPage = 8;



  const cardData = [
    { 
        id: 1.1,
        title: "Side",
        title:"A side dish, sometimes referred to as a side order, side item.",
        image: "https://www.themealdb.com/images/category/side.png",
        rating1: "fa fa-star checked",
        rating2: "fa fa-star checked",
        rating3: "fa fa-star checked",
        rating4: "fa fa-star",
        rating5: "fa fa-star",
        price: 250,
        price2: 150
      },
      {
        id: 1.2,
        title: "Vegan",
        text: "Veganism is both the practice of abstaining from the use of animal products, particularly in diet.",
        image: "https://www.themealdb.com/images/category/vegan.png",
        rating1:"fa fa-star checked",
        rating2:"fa fa-star checked",
        rating3:"fa fa-star checked",
        rating4:"fa fa-star checked",
        rating5:"fa fa-star",
        price:250,
        price2:130
      
      },
    
  
    {
        id: 1.3,
        title: "Pork",
        text: "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus).",
        image: "https://www.themealdb.com/images/category/pork.png",
        rating1:"fa fa-star checked",
        rating2:"fa fa-star checked",
        rating3:"fa fa-star checked",
        rating4:"fa fa-star",
        rating5:"fa fa-star",
        price:520,
        price2:350
    },
    {
      id: 1.4,
      title: "Starter",
      text: "An entrée in modern French table service and that of much of the English-speaking world",
      image: "https://www.themealdb.com/images/category/starter.png",
      rating1:"fa fa-star checked",
      rating2:"fa fa-star checked",
      rating3:"fa fa-star checked",
      rating4:"fa fa-star checked",
      rating5:"fa fa-star",
      price:260,
      price2:220
  },
  
  
  {
    id: 1.5,
    title: "Pasta",
    text: "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily",
    image: "https://www.themealdb.com/images/category/pasta.png",
    rating1:"fa fa-star checked",
    rating2:"fa fa-star checked",
    rating3:"fa fa-star checked",
    rating4:"fa fa-star checked",
    rating5:"fa fa-star",
    price:350,
    price2:180
},
  
  
  {
  id: 1.6,
  title: "Breakfast",
  text: "Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night.",
  image: "https://www.themealdb.com/images/category/breakfast.png",
  rating1:"fa fa-star checked",
  rating2:"fa fa-star checked",
  rating3:"fa fa-star checked",
  rating4:"fa fa-star checked",
  rating5:"fa fa-star",
  price:450,
  price2:250
  },
  
  
  
  
  
  {
  id: 1.7,
  title: "Vegetarian",
  text: "Vegetarianism is the practice of abstaining from the consumption of meat ",
  image: "https://www.themealdb.com/images/category/vegetarian.png",
  rating1:"fa fa-star checked",
  rating2:"fa fa-star checked",
  rating3:"fa fa-star checked",
  rating4:"fa fa-star checked",
  rating5:"fa fa-star",
  price:250,
  price2:155
  },
  
  
  {
  id: 1.8,
  title: "Miscellaneous",
  text: "General foods that don't fit into another category",
  image: "https://www.themealdb.com/images/category/miscellaneous.png",
  rating1:"fa fa-star checked",
  rating2:"fa fa-star checked",
  rating3:"fa fa-star checked",
  rating4:"fa fa-star",
  rating5:"fa fa-star",
  price:350,
  price2:299
  },

  {
    id: 1.9,
    title: "Margherita Pizza",
    text: "A simple and delicious pizza with fresh mozzarella, tomatoes, basil, and olive oil",
    image: "https://i.pinimg.com/736x/99/1b/70/991b70d70d65f7b271bc2fe7441b7da8.jpg",
    rating1:"fa fa-star checked",
    rating2:"fa fa-star checked",
    rating3:"fa fa-star checked",
    rating4:"fa fa-star checked",
    rating5:"fa fa-star",
    price:250,
    price2:299
    },
    {
      id: 1.10,
      title: "Classic Cheeseburger",
      text: "A timeless favorite with a juicy beef patty, melted cheddar cheese.",
      image: "https://img.freepik.com/premium-photo/classic-cheeseburger-with-beef-cheese-bacon-tomato-onion-lettuce-isolated-white-background_183587-2707.jpg?w=740",
      rating1:"fa fa-star checked",
      rating2:"fa fa-star checked",
      rating3:"fa fa-star checked",
      rating4:"fa fa-star",
      rating5:"fa fa-star",
      price:240,
      price2:210
      },


     
      
        {
          id: 1.11,
          title: "Vegetarian Pizza",
          text: "A delightful choice for vegetarians, this pizza is loaded with fresh vegetables.",
          image: "https://as1.ftcdn.net/v2/jpg/08/55/23/98/1000_F_855239898_1JBefWcvHkb1xbRzsyVSiBN8y3IMiZIS.jpg",
          rating1:"fa fa-star checked",
          rating2:"fa fa-star checked",
          rating3:"fa fa-star checked",
          rating4:"fa fa-star checked",
          rating5:"fa fa-star",
          price:220,
          price2:199
          },
          {
            id: 1.12,
            title: "Veggie Burger",
            text: "A delicious plant-based burger made with a savory veggie patty, topped with fresh lettuce, tomato, onions, creamy avocado.",
            image: "https://img.freepik.com/premium-photo/veggie-burger-with-white-background-high-quality-ul_889056-17613.jpg?w=740",
            rating1:"fa fa-star checked",
            rating2:"fa fa-star checked",
            rating3:"fa fa-star checked",
            rating4:"fa fa-star checked",
            rating5:"fa fa-star",
            price:240,
            price2:180
            },
            {
              id: 1.13,
              title: "Pepperoni Pizza",
              text: "A popular pizza topped with savory pepperoni slices.",
              image: "https://thumbs.dreamstime.com/z/pepperoni-pizza-american-food-product-mockup-white-background-generative-ai-make-your-stand-out-our-high-quality-269915229.jpg?w=768",
              rating1:"fa fa-star checked",
              rating2:"fa fa-star checked",
              rating3:"fa fa-star checked",
              rating4:"fa fa-star checked",
              rating5:"fa fa-star",
              price:350,
              price2:309
              },
         
      
          
              {
                id: 1.14,
                title: "Bacon Burger",
                text: "A savory burger with a beef patty, crispy bacon, and cheddar cheese.",
                image: "https://img.freepik.com/premium-photo/bacon-cheeseburger-with-white-background-high-quality_889056-97595.jpg?w=740",
                rating1:"fa fa-star checked",
                rating2:"fa fa-star checked",
                rating3:"fa fa-star checked",
                rating4:"fa fa-star checked",
                rating5:"fa fa-star",
                price:440,
                price2:400
                },
                {
                  id: 1.15,
                  title: "Hawaiian Pizza",
                  text: "A tropical favorite with a perfect blend of sweet and savory, featuring pineapple .",
                  image: "https://img.freepik.com/premium-photo/delicious-classic-hawaiian-pizza-with-chicken-pineapple-olives-mozzarella-cheese-isolated-white-background-top-view_79762-5459.jpg?w=740",
                  rating1:"fa fa-star checked",
                  rating2:"fa fa-star checked",
                  rating3:"fa fa-star checked",
                  rating4:"fa fa-star",
                  rating5:"fa fa-star",
                  price:180,
                  price2:140
                  },
      
         
                  {
                    id: 1.16,
                    title: "Veg Grilled Sandwich",
                    text: "A sandwich is a dish typically consisting of meat, cheese or vegetables used as a filling between slices of bread.",
                    image: "https://i.pinimg.com/736x/1a/f2/6f/1af26fb277be6cd6ea4e1db9dc7f0c3b.jpg",
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
        <h5 style={{fontFamily:'Audiowide'}}><img src={oops} style={{height:'90px',width:'90px'}}></img> Item not available</h5>
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
                      marginRight: "1px",
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
            style={{ border: "1px solid #FAF9F6", color: "black",marginBottom:'50px'}}
            onClick={handlePreviousPage}
          >
            &larr; Previous
          </button>
          <button
            disabled={page * itemsPerPage >= filteredData.length}
            style={{ border: "1px solid #FAF9F6", color: "black" ,marginBottom:'50px'
            }}
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
