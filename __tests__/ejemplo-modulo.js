import { suma } from '../js/funciones.js';


describe('Pruebas de modulos', () => {
    test('Que la suma de 10 y 10 sea 20 ', () => {
        expect(suma(10,10)).toBe(20);
    })
});