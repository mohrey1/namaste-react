import React from "react";
import ReactDOM from "react-dom/client";

  const Header = () => {
    return <div className="header">
      <div className="logo-container">
          <img
            className="logo"
            src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=beef-bread-buns-1633578.jpg&fm=jpg"
          />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  }

  const RestaurantCard = () => {
    return <div className="res-card" style={{backgroundColor: "f0f0f0"}}>
        <img
        className="res-logo"
        alt="res-logo"
        src="https://myfoodstory.com/wp-content/uploads/2022/07/Chicken-Biryani-2-720x1080.jpg"
        />
        <h3>Mansi ki Biryani</h3>
        <h4>Biryani, North Indian</h4>
        <h4>4.4 Stars</h4>
      </div>
  }

  const Body = () => {
    return <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  }

  const AppLayout = () => {
  return <div className ="app">
    <Header/>
    <Body/>
  </div>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout/>);



  