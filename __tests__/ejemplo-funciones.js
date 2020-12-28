function suma(a,b){
    return a + b;
}

function resta(a,b){
    return a - b;
}


describe('Pruebas a funciones', () => {
    test('Que la suma de 10 y 10 sea 20 ', () => {
        expect(suma(10,10)).toBe(20);
    })

    test('Que la resta de 10 y 10 sea 0 ', () => {
        expect(resta(10,10)).toBe(0);
    })

    test('Que la suma de 10 y 10 no sea 15 ', () => {
        expect(suma(10,10)).not.toBe(15);
    })
    
});