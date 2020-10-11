// const API_KEY = "7b2d9f349dc39d6e87065de3ae52361a";
const API_URL = "https://api.themoviedb.org/3/";
const READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjJkOWYzNDlkYzM5ZDZlODcwNjVkZTNhZTUyMzYxYSIsInN1YiI6IjVmN2Y4OTNjMDI4NDIwMDAzNzA3YTJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UCWJ0bVC47Ma_7LcURhx6ajOSPE57RoCBhB-2GnKpPU";

export const IMAGE_URL = "http://image.tmdb.org/t/p/original";

export const fetchMovies = async (endPoint) => {
  try {
    // const response = await fetch(API_URL + "movie/popular?api_key=" + API_KEY);
    const response = await fetch(API_URL + endPoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
      },
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
