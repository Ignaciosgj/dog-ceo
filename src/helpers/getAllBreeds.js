import axios from "axios";

export const getAllBreeds = async () => {
  try {
    const result = await axios("https://dog.ceo/api/breeds/list/all");
    const message = result.data;
    return message;
  } catch (error) {
    console.log(error);
    throw new Error('API caida');
  }
};
