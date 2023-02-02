import { describe, expect, it, vi } from "vitest";
import { breedsFormatter } from "./breedsFormatter";

describe("pruebas para breedsFormatter", () => {
    it("debería recibir la data como 'bulldog': ['boston', 'english', 'french'] y devolverla como '{ breed: 'bulldog', subBreeds: [ 'boston', 'english', 'french' ] }'", () => {

        //Arrange
        const data = {
            "briard": [],
            "buhund": [
                "norwegian"
            ],
            "bulldog": [
                "boston",
                "english",
                "french"
            ]
        }

        const formattedData = [{ breed: 'briard' },
        { breed: 'buhund', subBreeds: [ 'norwegian' ] },
        { breed: 'bulldog', subBreeds: [ 'boston', 'english', 'french' ] }]

        //Act
        const result = breedsFormatter(data);

        //Assert
        expect(result).toEqual(formattedData);

    })

    it("debería devolver un arreglo vacío", () => {
        //Arrang
        const param1 = 1;
        const param2 = true;
        const param3 = [];
        const param4 = 'string';
        const param5= null;
        const param6 = undefined;
        
        //Act & Assert
        expect(breedsFormatter(param1)).toEqual([]);
        expect(breedsFormatter(param2)).toEqual([]);
        expect(breedsFormatter(param3)).toEqual([]);
        expect(breedsFormatter(param4)).toEqual([]);
        expect(breedsFormatter(param5)).toEqual([]);
        expect(breedsFormatter(param6)).toEqual([]);
    })
})

