import React from "react";
import { motion } from "framer-motion";
import "./Discover.css";

const Discover = () => {
  const reviews = [
    {
      name: "Arjun Raghav",
      profileImage:
        "https://i.pinimg.com/564x/c9/59/61/c95961fe507b305f9ac551b6d99e928f.jpg",
      rating: 5,
      review:
        "I am writing this after reflecting on my one month stay with Brisphere in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.",
    },
    {
      name: "Anand Solanki",
      profileImage:
        "https://i.pinimg.com/564x/30/f3/e4/30f3e4b8663f9adaf31f4eac302942f5.jpg",
      mainImage:
        "https://i.pinimg.com/564x/87/95/49/8795496a77e5ce177261275272cb142a.jpg",
      rating: 5,
      review:
        "I am writing this after reflecting on my one month stay with Brisphere in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.",
    },
  ];

  return (
    <motion.div
      className="discover-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Discover</h2>
      <div className="reviews-container">
        <motion.div
          className="review-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src={reviews[0].profileImage}
            alt="Profile"
            className="profile-image"
          />
          <h3>{reviews[0].name}</h3>
          <p className="rating">★★★★★</p>
          <p>{reviews[0].review}</p>
          <a href="#more">read more</a>
        </motion.div>

        <motion.div
          className="main-review-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.img
            src={reviews[1].mainImage}
            alt="Ladakh Landscape"
            className="main-image"
            transition={{ duration: 0.3 }}
          />
          <div className="main-review-content">
            <img
              src={reviews[1].profileImage}
              alt="Profile"
              className="profile-image"
            />
            <h3>{reviews[1].name}</h3>
            <p className="rating">★★★★★</p>
            <p>{reviews[1].review}</p>
            <a href="#more">read more</a>
          </div>
        </motion.div>

        <motion.div
          className="review-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <img
            src={reviews[0].profileImage}
            alt="Profile"
            className="profile-image"
          />
          <h3>{reviews[0].name}</h3>
          <p className="rating">★★★★★</p>
          <p>{reviews[0].review}</p>
          <a href="#more">read more</a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Discover;
