/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
// import "./reset.css";
import "./App.css";

function App() {
  const [coffeeList, setCoffeeList] = useState([]);
  const [allProducts, setAllProducts] = useState(true);
  const [available, setAvailable] = useState(false);

  const fetchCoffee = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
      );
      const data = await response.json();
      setCoffeeList(data);
    } catch (error) {
      console.error("Catch: Error ", error);
    }
  };

  useEffect(() => {
    fetchCoffee();
  }, []);

  let filteredCoffeeList = coffeeList;

  if (available && !allProducts) {
    filteredCoffeeList = filteredCoffeeList.filter((item) => item.available);
  }

  const handleAllProducts = () => {
    setAllProducts(true);
    setAvailable(false);
  };

  const handleAvailable = () => {
    setAllProducts(false);
    setAvailable(true);
  };

  return (
    <div className="App">
      <div className="background-header"></div>
      <div className="container">
        <div className="information-container">
          <h2>Our Colletion</h2>
          <p>
            Introducing our Coffee Collection, a selection of unique cofees from
            different roast types and origins, expertly roasterd in small
            batches and shipped fresh weekly.
          </p>
        </div>
        <div className="filter-container">
          <button
            onClick={handleAllProducts}
            className={allProducts ? "active" : ""}
          >
            All Products
          </button>
          <button
            onClick={handleAvailable}
            className={available ? "active" : ""}
          >
            {" "}
            Available Now{" "}
          </button>
        </div>
        <div className="coffee-grid-container">
          <div className="coffee-grid">
            {filteredCoffeeList.map((item, index) => (
              <div key={index} className="coffee-listing-container">
                <div className="coffee-image">
                  <div className="popular-icon">
                    {item.popular && (
                      <div className="popular-container">
                        <a className="popular">Popular</a>
                      </div>
                    )}
                  </div>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="coffe-price">
                  <h3>{item.name}</h3>
                  <h3 className="price">{item.price}</h3>
                </div>
                <div className="qualification">
                  <h3>
                    ⭐ {item.rating}
                    <a>({item.votes})</a>
                  </h3>
                  <h3 className="state">{item.available ? "" : "Sold Out"}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
