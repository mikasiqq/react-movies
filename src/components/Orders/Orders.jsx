import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card/Card";
import CardSkeleton from "./Card/CardSkeleton";
import classes from "./Orders.module.scss";

const Orders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    orders.length > 0 ? setIsLoading(false) : setIsLoading(true);
  }, [orders]);

  return (
    <section className={classes.orders}>
      <h3>Мои билеты</h3>
      <div className={classes.orderCards}>
        {isLoading
          ? [...Array(3)].map((el, index) => <CardSkeleton key={index} />)
          : orders.map((order) => (
              <Card key={Number(order.id)} order={order} />
            ))}
      </div>
    </section>
  );
};

export default Orders;
