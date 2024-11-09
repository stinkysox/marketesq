/* eslint-disable no-empty */
/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { motion } from "framer-motion";
import "./BookingSection.css";

const BookingSection = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [isBookClicked, setIsBookClicked] = useState(false);
  const [roomPrice, setRoomPrice] = useState(1200.0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

  const incrementRooms = () => setRooms((prev) => prev + 1);
  const decrementRooms = () => setRooms((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkInDate !== "" && checkOutDate !== "" && rooms !== 0) {
      setIsBookClicked(true);
    }
  };

  const handleOnDetailsSubmitted = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && phone !== "") {
      setIsConfirmed(true);
      setCheckInDate("");
      setCheckOutDate("");
      setRooms(1);
    }
  };

  const handleBookMore = () => {
    setIsConfirmed(false);
    setIsBookClicked(false);
    setName("");
    setEmail("");
    setPhone("");
    setNumAdults(1);
    setNumChildren(0);
    setRooms(1);
    setCheckInDate("");
    setCheckOutDate("");
  };

  return (
    <>
      <div className="booking-section">
        {!isBookClicked && (
          <>
            <motion.div
              className="booking-text-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Work from Ladakh</h2>
              <p>India's first true digital tourism ecosystem</p>
              <div>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </motion.div>
            <motion.div
              className="booking-image-container"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://i.pinimg.com/564x/b3/18/80/b318802d8b68969d37b9f44a9519b7ef.jpg"
                alt="Work from Ladakh"
              />
            </motion.div>
          </>
        )}

        {isBookClicked && !isConfirmed && (
          <motion.div
            className="booking-customer-details-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="input-row">
              <div className="input-container">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-container">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="input-field phone-number-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="numAdults">Number of Adults</label>
                <br />
                <input
                  type="number"
                  id="numAdults"
                  placeholder="Enter number of adults"
                  className="input-field"
                  value={numAdults}
                  onChange={(e) => setNumAdults(Number(e.target.value))}
                  min="1"
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="numChildren">Number of Children</label>
                <br />
                <input
                  type="number"
                  id="numChildren"
                  placeholder="Enter number of children"
                  className="input-field"
                  value={numChildren}
                  onChange={(e) => setNumChildren(Number(e.target.value))}
                  min="0"
                />
              </div>
            </div>
          </motion.div>
        )}

        {isConfirmed && (
          <motion.div
            className="show-customer-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="customer-info">
              <p>
                <strong>{name}</strong>
              </p>
              <p>Phone: {phone}</p>
              <p>Email: {email}</p>
              <p>
                Rooms: {rooms} | Adults: {numAdults} | Children: {numChildren}
              </p>
            </div>

            <div className="order-confirmed">
              <img
                src="https://i.pinimg.com/564x/5b/29/ef/5b29ef79922410b6979b00b924bf14b0.jpg"
                alt="Order Confirmed"
                className="green-tick-image"
              />
              <p>Order Confirmed</p>
              <p>
                Have any questions?<span className="call-us"> Call us!</span>
              </p>
            </div>
          </motion.div>
        )}
      </div>

      <form className="floating-div" onSubmit={handleSubmit}>
        <div className="date-picker-section">
          <div className="date-picker">
            <label>Check In</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>
          <div className="date-picker">
            <label>Check Out</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>
          <div className="room-picker">
            <label>Rooms</label>
            <div className="room-control">
              <button type="button" onClick={decrementRooms}>
                -
              </button>
              <span>{rooms}</span>
              <button type="button" onClick={incrementRooms}>
                +
              </button>
            </div>
          </div>
          <div>
            {isConfirmed ? (
              <motion.button
                type="button"
                className="book-button"
                onClick={handleBookMore}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Book More
              </motion.button>
            ) : isBookClicked ? (
              <motion.button
                type="submit"
                className="book-button"
                onClick={handleOnDetailsSubmitted}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <MdCurrencyRupee />
                {roomPrice * rooms} <FaArrowRight />
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                className="book-button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaArrowRight />
              </motion.button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default BookingSection;
