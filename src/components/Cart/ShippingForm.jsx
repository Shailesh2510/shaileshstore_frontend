import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShippingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    pincode: "",
    state: "",
    city: "",
    country: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Invalid phone number";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      navigate("/Confirmation");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "16px",
        boxSizing: "border-box",
        background: "linear-gradient(to right, #5ee7df, #b490ca)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "24px",
          background: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333" }}>Shipping Form</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#333" }}>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px" }}
            />
            {errors.firstName && <span style={{ color: "red" }}>{errors.firstName}</span>}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#333" }}>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px" }}
            />
            {errors.lastName && <span style={{ color: "red" }}>{errors.lastName}</span>}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#333" }}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px" }}
            />
            {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#333" }}>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px" }}
            />
            {errors.phoneNumber && <span style={{ color: "red" }}>{errors.phoneNumber}</span>}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#333" }}>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px" }}
            />
            {errors.address && <span style={{ color: "red" }}>{errors.address}</span>}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#333" }}>Pincode:</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px" }}
            />
            {errors.pincode && <span style={{ color: "red" }}>{errors.pincode}</span>}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#333" }}>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px" }}
            />
            {errors.state && <span style={{ color: "red" }}>{errors.state}</span>}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#333" }}>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px" }}
            />
            {errors.city && <span style={{ color: "red" }}>{errors.city}</span>}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#333" }}>Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px" }}
            />
            {errors.country && <span style={{ color: "red" }}>{errors.country}</span>}
          </div>
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <button
              type="submit"
              style={{
                background: "purple",
                color: "white",
                borderRadius: "4px",
                border: "none",
                padding: "8px 16px",
                width: "100%",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingForm;
