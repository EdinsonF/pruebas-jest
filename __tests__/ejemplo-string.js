const contrasena = "123456";

describe('Valida que la contraseña no este vacio  y tenga extension de 9 caracteres', () => {
    test('Que la contraseña tenga 6 caracteres', () => {
        expect(contrasena).toHaveLength(6);
    })
    test('Valida que la contraseña no este vacia', () => {
        expect(contrasena).not.toHaveLength(0);
    })
    
});