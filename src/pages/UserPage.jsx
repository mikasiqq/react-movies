import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Orders from "../components/Orders/Orders";
import { getOrders } from "../store/actions/order-actions";

const UserPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return <Orders />;
};

export default UserPage;
