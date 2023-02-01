import { render, screen } from "@testing-library/react";
import axios from "axios";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";
import { getAllBreeds } from "./helpers/getAllBreeds";

vi.mock("axios");

describe("test", () => {
  it("render", () => {
    render(<App />);
  });

  //   it("Deberia Recibir la data", async () => {
  //     //arrange;

  //     //act
  //     const result = await getAllBreeds();

  //     //Assert
  //     expect(result.status).toBe('success');
  //   });

  //   it("debería traer 3 breeds", async () => {
  //     //arrange
  //     const breedsMock = {
  //       affenpinscher: [],
  //       african: [],
  //       airedale: [],
  //     };
  //     axios.mockResolvedValue({
  //       data: breedsMock,
  //     });

  //     //act
  //     const result = await getAllBreeds();

  //     //assert
  //     expect(result).toEqual(breedsMock);
  //   });

  it("Deberia fallar", async () => {
    //Arrange
    // const asyncMock = vi.fn.mockRejectedValue(new Error("Rejected value"));
    //vi.fn().mockRejectedValue(new Error('Async error'))
    axios.get.mockRejectedValue({ status: "Error" });
    //Act

    const result = await getAllBreeds();
    console.log(result);

    //Assert
    expect(result).toThrowError("Cuak");
  });
});
