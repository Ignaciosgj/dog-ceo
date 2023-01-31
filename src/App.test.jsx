import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";
import { getAllBreeds } from "./helpers/getAllBreeds";

describe("test", () => {
  it("render", () => {
    render(<App />);
  });

  it("Deberia Recibir la data", async () => {
    //arrange;

    //act
    const result = await getAllBreeds();
    console.log(result);

    //Asert
  });
});
