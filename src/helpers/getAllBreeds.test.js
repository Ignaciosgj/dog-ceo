import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { getAllBreeds } from "./getAllBreeds";

vi.mock("axios");

describe("test", () => {
  // afterEach(() => {
  //   vi.clearAllMocks();
  //   vi.resetAllMocks();
  // })

  it("debería traer 3 breeds", async () => {
    //arrange
    const breedsMock = {
      affenpinscher: [],
      african: [],
      airedale: [],
    };
    axios.mockResolvedValue({
      data: breedsMock,
    });

    //act
    const result = await getAllBreeds();

    //assert
    expect(result).toEqual(breedsMock);
  });

  it("Deberia traer 3 breeds con subBreeds", async () => {
    //Arrange
    const breedsMock = {
      briard: [],
      buhund: ['norwegian'],
      bulldog: ['boston', 'english', 'french']
    }
    axios.mockResolvedValue({
      data: breedsMock
    })

    //Act
    const result = await getAllBreeds();

    //Assert
    expect(result).toEqual(breedsMock);
  })

  it("Deberia fallar", async () => {
    //Arrange

    //Act
    axios.mockImplementation(() => Promise.reject());

    //Assert
    await expect(() => getAllBreeds()).rejects.toThrowError("API caida");
  });

});
