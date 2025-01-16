import axiosInstance from "./axiosInstance";

export const fetchMovies = async (title, genre, rating) => {
  try {
    const response = await axiosInstance.get(
      `/movies?title=${title ? title : ""}${genre ? "&genre=" + genre : ""}${
        rating ? "&rating=" + rating : ""
      }`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieById = async (id) => {
  try {
    const response = await axiosInstance.get(`/movies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMovieById = async (id) => {
  try {
    const response = await axiosInstance.delete(`/movies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMovie = async (
  title,
  description,
  actors,
  director,
  genre,
  rating,
  releaseDate,
  image
) => {
  try {
    const response = await axiosInstance.post(`/movies`, {
      title: title,
      description: description,
      actors: actors,
      director: director,
      genre: genre,
      rating: rating,
      releaseDate: releaseDate,
      image: image,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editMovie = async (
  id,
  title,
  description,
  actors,
  director,
  genre,
  rating,
  releaseDate,
  image
) => {
  try {
    const response = await axiosInstance.put(`/movies/${id}`, {
      title: title,
      description: description,
      actors: actors,
      director: director,
      genre: genre,
      rating: rating,
      releaseDate: releaseDate,
      image: image,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
