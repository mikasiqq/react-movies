import axios from "axios";
import { orderActions } from "../slices/order-slice";

export const getOrders = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axios.get(
        "https://636fbf10bb9cf402c81eb9b5.mockapi.io/orders"
      );
      const data = await response.data;

      return data;
    };

    try {
      const ordersData = await getData();
      dispatch(orderActions.replaceOrders(ordersData));
    } catch (err) {
      alert("Ошибка при получении информации о билетах :(");
      console.error(err);
    }
  };
};
