import { useState } from "react";
import Header from "./components/header";

import coffeeHero from "./assets/coffeeTopView.jpg";

function App() {
    const [coffeeCount, setCoffeeCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0); // calculates the coffee total
    const [showPopup, setShowPopup] = useState(false); 

  return (
    <div className="page">

      {/* LEFT SIDE PICTURE */}
      <img
        src={coffeeHero}
        alt="Coffee decoration"
        className="side-image left-image"
      />

      <div className="main-container">

        <Header />

        <section className="hero" id="home">

          <div className="hero-text">

            <p className="hero-label">COFFEE</p>

            <h1>
              Coffee
              <br />
              The Best For You
            </h1>

            <p className="hero-description">
              Enjoy freshly prepared coffee made with carefully selected beans.
            </p>

            <a href="#coffee" className="hero-button">
                    View Menu
              </a>

          </div>

          <div className="hero-image">

            <img
              src={coffeeHero}
              alt="Cup of coffee"
            />

          </div>

        </section>


        <section className="coffee-categories">

          <div className="category">
            <div className="category-icon">☕</div>
            <p>Hot Coffee</p>
          </div>

          <div className="category">
            <div className="category-icon">🥤</div>
            <p>Cold Coffee</p>
          </div>

          <div className="category">
            <div className="category-icon">🍰</div>
            <p>Desserts</p>
          </div>

          <div className="category">
            <div className="category-icon">🫘</div>
            <p>Coffee Beans</p>
          </div>

        </section>


        <section className="featured-coffee" id="coffee">

          <div className="section-heading">
            <p>OUR COFFEE</p>
            <h2>Explore Our Popular Coffee</h2>

            <p className="coffee-count">
             Coffees added: {coffeeCount}
            </p>

            <p className="coffee-total">
                 Total: R{totalPrice}
            </p>

          </div>

          <div className="coffee-cards">

            <div className="coffee-card">

              <img
                src={coffeeHero}
                alt="Americano coffee"
              />

              <h3>Americano</h3>

              <p>
                Rich and smooth coffee made with espresso and hot water.
              </p>

              <div className="coffee-card-bottom">
                <span>R45</span>
                <button
  onClick={() => {
    setCoffeeCount(coffeeCount + 1);
    setTotalPrice(totalPrice + 45);
  }}
>
  +
</button>

    <button
  onClick={() => {
    if (coffeeCount > 0) {
      setCoffeeCount(coffeeCount - 1);
      setTotalPrice(totalPrice - 45);
    }
  }}
>
  -
</button>
              </div>

            </div>


            <div className="coffee-card">

              <img
                src={coffeeHero}
                alt="Cappuccino coffee"
              />

              <h3>Cappuccino</h3>

              <p>
                A creamy coffee topped with steamed milk and foam.
              </p>

              <div className="coffee-card-bottom">
                <span>R50</span>

        <button
              onClick={() => {
                  setCoffeeCount(coffeeCount + 1);
                     setTotalPrice(totalPrice + 50);
                         }}
                                      >
                                     +
                              </button>
    <button
  onClick={() => {
    if (coffeeCount > 0) {
      setCoffeeCount(coffeeCount - 1);
      setTotalPrice(totalPrice - 45);
    }
  }}
>
  -
</button>           

 </div>

            </div>


            <div className="coffee-card">

              <img
                src={coffeeHero}
                alt="Latte coffee"
              />

              <h3>Latte</h3>

              <p>
                Smooth espresso combined with warm steamed milk.
              </p>

              <div className="coffee-card-bottom">
                <span>R48</span>
            <button
          onClick={() => {
              setCoffeeCount(coffeeCount + 1);
                setTotalPrice(totalPrice + 48);
                    }}
                        >
                         +
                </button>
           <button
  onClick={() => {
    if (coffeeCount > 0) {
      setCoffeeCount(coffeeCount - 1);
      setTotalPrice(totalPrice - 45);
    }
  }}
>
  -
</button>         
            
             </div>

            </div>

          </div>

        </section>


        <section className="about-section" id="about">

          <div className="about-image">

            <img
              src={coffeeHero}
              alt="Fresh coffee"
            />

          </div>

          <div className="about-text">

            <p className="about-label">ABOUT COFFEE</p>

            <h2>
              Coffee Is More Than
              <br />
              Just A Drink
            </h2>

            <p>
              Coffee brings people together. We carefully select our
              coffee beans and prepare every cup with passion and care.
            </p>

            <p>
              Whether you enjoy your coffee in the morning or during a
              relaxing afternoon, we are here to give you a special
              coffee experience.
            </p>

            <a href="#coffee" className="about-button">
                      Learn More
            </a>

          </div>

        </section>


        <section className="app-section">

          <div className="app-image">

            <div className="phone">

  <div className="phone-camera"></div>

  <div className="phone-speaker"></div>

  <div className="phone-top">
    iphone 18 pro-max
  </div>

  <div className="phone-screen">

                

                <h3>Good Coffee</h3>

                <p>
                  Fresh coffee, wherever you are.
                </p>

               <a href="#coffee" className="phone-order-button">
                    Order Now
                </a>
              <div className="home-indicator">

              </div>
              </div>

            </div>

          </div>


          <div className="app-text">

            <p className="app-label">OUR MOBILE APP</p>

            <h2>
              Get Our Coffee
              <br />
              App
            </h2>

            <p>
              Order your favourite coffee easily using our mobile
              application. Choose your coffee and enjoy a simple
              ordering experience.
            </p>

            <button className="app-button" onClick={() => setShowPopup(true)}>
                        Download App
              </button>

          </div>

        </section>


        <section className="reservation-section" id="contact">

          <div className="reservation-text">

            <p className="reservation-label">RESERVATION</p>

            <h2>
              Want to Reserve
              <br />
              a Table?
            </h2>

            <p>
              Come and enjoy a delicious cup of coffee in a
              comfortable and relaxing atmosphere.
            </p>

            <a href="mailto:nthabi@flavoredcoffee.com"  //To open my email
              className="reservation-button"
                    >
             Contact Now
          </a>

          </div>

        </section>


        <footer className="footer">

          <div className="footer-brand">

            <h2>Flavored ☕</h2>

            <p>
              Fresh coffee made with passion.
            </p>

          </div>


          <div className="footer-links">

            <div>
              <h3>Services</h3>
              <a href="#coffee">Coffee Menu</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact Us</a>
            </div>


            <div>
              <h3>Company</h3>
              <a href="#home">Home</a>
              <a href="#coffee">Our Coffee</a>
              <a href="#about">Our Story</a>
            </div>


            <div>
              <h3>Contact</h3>
              <p>Princess Tau</p>
              <p>+27 729 3456</p>
              <p>nthabi@flavoredcoffee.com</p>
            </div>

          </div>

        </footer>

      </div>


      {/* RIGHT SIDE PICTURE */}
      <img
        src={coffeeHero}
        alt="Coffee decoration"
        className="side-image right-image"
      />
 
{showPopup && (
  <div className="popup-overlay">

    <div className="popup-box">

      <div className="popup-icon">
        ☕
      </div>

      <h2>Flavored Coffee</h2>

      <p>
        Our mobile app is coming soon!
        <br />
        Get ready to order your favourite coffee with ease.
      </p>

      <button
        className="popup-button"
        onClick={() => setShowPopup(false)}
      >
        Okay
      </button>

    </div>

  </div>
)}



    </div>
  );
}

export default App;