import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrderBook } from '../redux/orderBookSlice';
import socket from '../services/webSocketService';
import './OrderBook.scss';

const OrderBook = () => {
    const dispatch = useDispatch();
    const { bids, asks } = useSelector((state) => state.orderBook);
  
    const [precision, setPrecision] = useState(2);
    const [visibleRows, setVisibleRows] = useState(10); 
  
    useEffect(() => {
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (Array.isArray(data)) {
          dispatch(updateOrderBook(data));
        }
      };
    }, [dispatch]);
  
    const increasePrecision = () => {
      setPrecision((prev) => (prev < 5 ? prev + 1 : prev));
    };
  
    const decreasePrecision = () => {
      setPrecision((prev) => (prev > 0 ? prev - 1 : prev));
    };
  
    const zoomIn = () => {
      setVisibleRows((prev) => (prev > 5 ? prev - 5 : prev)); 
    };
  
    const zoomOut = () => {
      setVisibleRows((prev) => prev + 5); 
    };
  
    return (
      <div className="order-book">
        <div className="order-book__controls">
          <button onClick={increasePrecision}>Increase Precision</button>
          <button onClick={decreasePrecision}>Decrease Precision</button>
          <button onClick={zoomIn}>Zoom In</button>
          <button onClick={zoomOut}>Zoom Out</button>
        </div>
        <div className="order-book__column">
          <h3>Bids</h3>
          {bids.slice(0, visibleRows).map((bid, index) => (
            <div key={index} className="order-book__row">
              <span>{bid[1].toFixed(precision)}</span>
              <span>{bid[2].toFixed(precision)}</span>
              <span>{bid[0].toFixed(precision)}</span>
            </div>
          ))}
        </div>
        <div className="order-book__column">
          <h3>Asks</h3>
          {asks.slice(0, visibleRows).map((ask, index) => (
            <div key={index} className="order-book__row">
              <span>{ask[1].toFixed(precision)}</span>
              <span>{ask[2].toFixed(precision)}</span>
              <span>{ask[0].toFixed(precision)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default OrderBook;
