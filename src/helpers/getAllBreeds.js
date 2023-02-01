import axios from "axios"

export const getAllBreeds = async () => {
  const result = await axios('https://dog.ceo/api/breeds/list/all');
  const  message  = result.data;
  return message;
}