import { render, screen } from "@testing-library/react";
import axios from "axios";
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { App } from "./App";
import { getAllBreeds } from "./helpers/getAllBreeds";

vi.mock('axios')



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

  it("debería traer 3 breeds", async () => {
    //arrange
    const breedsMock = {
        "affenpinscher": [],
        "african": [],
        "airedale": []
    }
    axios.mockResolvedValue({
        data: breedsMock
    })

    //act
    const result = await getAllBreeds();

    //assert
    expect(result).toEqual(breedsMock);
  });

  
});



