const usuario ={
    nombre : 'Edinson Figueroa',
    balance: 500
}

describe('Prueba a usuarios', () => {
    test('El Usuaurio se llama', () => {
        expect(usuario.nombre).toBe('Edinson Figueroa');
    })

    test('El usuario no es', () => {
        expect(usuario).not.toBe('Andres Lopes');
    })

    test('el balance es mayor que 400', () => {
        expect(usuario.balance).toBeGreaterThan(400);
    })
    
    test('El balance no es', () => {
        expect(usuario.balance).not.toBe(400);
    })
    
    
    
});