import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card/Card";
import classes from "./Orders.module.scss";

const Orders = () => {
  const orders = useSelector((state) => state.order.orders);

  return (
    <section className={classes.orders}>
      <h3>Мои билеты</h3>
      <div className={classes.orderCards}>
        {orders.map((order) => (
          <Card key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default Orders;
