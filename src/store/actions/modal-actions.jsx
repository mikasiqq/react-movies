import axios from "axios";

export const postOrder = ({
  dateOrder,
  updatedTickets,
  totalPrice,
  currentDate,
  movieTitle,
  movieImage,
  movieTime
}) => {
  return async () => {
    const postData = async () => {
      const movieDate = currentDate.date;
      await axios.post("https://636fbf10bb9cf402c81eb9b5.mockapi.io/orders", {
        dateOrder,
        updatedTickets,
        totalPrice,
        movieDate,
        movieTitle,
        movieImage,
        movieTime
      });
    };
    await postData();
  };
};

export const updateTickets = (scheduleDates, currentDateId) => {
  return async () => {
    const updateData = async () => {
      const curDateIndex = scheduleDates.findIndex((el) => el.id === currentDateId)
      const curDate = scheduleDates[curDateIndex]
      const dateMovies = curDate.movies
      await axios.put(`https://636fbf10bb9cf402c81eb9b5.mockapi.io/dates/${curDate.id}`, {
        movies: dateMovies
      })
    }
    await updateData()
  }
}
