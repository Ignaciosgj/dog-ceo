import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { App } from "./App";

describe("test", () => { 
    test("render", () => {
        render(<App />)
        screen.debug();
    })
})