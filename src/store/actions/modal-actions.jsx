import axios from "axios";

export const postOrder = (
  dateOrder,
  updatedTickets,
  totalPrice,
  currentDate,
  movieTitle,
  movieImage
) => {
  return async (dispatch) => {
    const postData = async () => {
      const movieDate = currentDate.date;
      await axios.post("https://636fbf10bb9cf402c81eb9b5.mockapi.io/orders", {
        dateOrder,
        updatedTickets,
        totalPrice,
        movieDate,
        movieTitle,
        movieImage
      });
    };
    await postData();
  };
};
