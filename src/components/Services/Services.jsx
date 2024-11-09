import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "High Speed Internet",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    icon: "📶",
  },
  {
    title: "Healthy Meals",
    description:
      "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere.",
    icon: "🍽️",
  },
  {
    title: "Homely Stay",
    description:
      "Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts provided in your space.",
    icon: "🏡",
  },
  {
    title: "Transportation",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    icon: "🚗",
  },
  {
    title: "Food Delivery",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    icon: "🍲",
  },
  {
    title: "Tourism",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    icon: "🌄",
  },
  {
    title: "Job",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    icon: "💼",
  },
  {
    title: "Rental Service",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    icon: "🚲",
  },
  {
    title: "Online Shop",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    icon: "🛒",
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
