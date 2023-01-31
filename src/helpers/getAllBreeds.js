export const getAllBreeds = async () => {
  const url = "https://dog.ceo/api/breeds/list/all";
  const response = await fetch(url);
  const json = await response.json();

  return json;
};
