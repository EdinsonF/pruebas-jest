const carrito = ['Producto 1', 'Producto2', 'Producto3'];

describe('Testing a carrito de compra', ()=>{
    test('Validar que el carrito tenga 3 elemntos', () => {
        expect(carrito).toHaveLength(3);
    })

    test('Valida que el carrito no este vacio', () => {
        expect(carrito).not.toHaveLength(0);
    })
    
    

});