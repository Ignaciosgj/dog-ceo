import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { getByBreed } from "./getByBreed";

vi.mock("axios");

describe("test", () => {
  // afterEach(() => {
  //   vi.clearAllMocks();
  //   vi.resetAllMocks();
  // })

  // it("Probando la Api", async () => {
  //   const test = await getByBreed("akita");
  // });

  it("Deberia retornar un arreglo de imagen", async () => {
    //Arrange
    const dogImage = {
      data: {
        message: [
          `https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg`,
          `https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg`,
          `https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg`,
        ],
      },
    };
    axios.mockResolvedValue(dogImage);
    //Act
    const result = await getByBreed("akita");
    //Asert
    expect(result).toEqual(dogImage.data.message);
  });

  it('Deberia fallar y retornar el mensaje "Api cauida" ', () => {});
});
