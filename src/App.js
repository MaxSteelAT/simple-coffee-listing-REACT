import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="background-header"></div>
      <div className="container">
        <div className="information-container">
          <h2>Our Colletion</h2>
          <p>
            Introducing our Coffee Collection, a selection of unique cofees from
            different roast types and origins, expertly roasterd in small
            batches and shipped fresh weekly
          </p>
        </div>
        <div className="filter-container">
          <button>All Products</button>
          <button> Available Now</button>
        </div>
        <div className="coffee-listing-container">
          {/* <img alt="">img</img> */}
          <div className="coffe-price">
            <h3>coffee</h3>
            <h3>$5.20</h3>
          </div>
          <div className="qualification state">
            {/* <img alt="">icon</div> */}
            <h3>4.7</h3>
            <h3>Sold out</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
