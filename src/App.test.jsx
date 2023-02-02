import { render, screen } from "@testing-library/react";
import axios from "axios";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";
import { getAllBreeds } from "./helpers/getAllBreeds";

describe("test", () => {
  it("debería renderizar el componente <App/>", async () => {
    //arrange
    render(<App />);
    //act & assert
    expect(screen.getByText("Hola mundo")).toBeDefined();
  });
});
