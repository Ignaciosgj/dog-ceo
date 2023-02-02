import axios from "axios";

export const getByBreed = async (breed) => {
  try {
    const result = await axios(`https://dog.ceo/api/breed/${breed}/images`);
    const { message } = result.data;
    return message;
  } catch (error) {
    console.log(error);
    throw new Error("API caida");
  }
};
