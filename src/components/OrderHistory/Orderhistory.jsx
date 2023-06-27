import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './OrderHistory.scss';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/orders');
      setOrders(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:1337/api/orders/${orderId}`);
      fetchOrderHistory();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className="order-history-container">
      <h1>Order History</h1>
      {Array.isArray(orders) && orders.length > 0 ? (
        orders.map((order) => (
          <div className="order-item" key={order.id}>
            <h2>Order ID: {order.id}</h2>
            {order.attributes.products && order.attributes.products.length > 0 ? (
              order.attributes.products.map((product) => (
                <React.Fragment key={product.id}>
                  <p>Product Name: {product.attributes.title}</p>
                  <p>Quantity: {product.attributes.quantity}</p>
                  <p>Total Price: &#8377; {product.attributes.price}</p>
                  <p>Order Created Time: {order.attributes.createdAt}</p>
                  <p>Order Updated Time: {order.attributes.updatedAt}</p>
                  <p>Order published Time: {order.attributes.publishedAt}</p>

                  {product.attributes.img &&
                    product.attributes.img.data &&
                    product.attributes.img.data[0] &&
                    product.attributes.img.data[0].attributes &&
                    product.attributes.img.data[0].attributes.url && (
                      <img
                        src={`http://localhost:1337${product.attributes.img.data[0].attributes.url}`}
                        alt="Product"
                      />
                    )}
                </React.Fragment>
              ))
            ) : (
              <div className="order-not-found">
                <p>No orders found.</p>
                <button className="redirect-btn" onClick={handleRedirect}>
                  Go to Home
                </button>
              </div>
            )}
            <button className="remove-order-btn" onClick={() => removeOrder(order.id)}>
              Remove Order
            </button>
            <hr />
          </div>
        ))
      ) : (
        <div className="order-not-found">
          <p>No orders found.</p>
          <button className="redirect-btn" onClick={handleRedirect}>
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
