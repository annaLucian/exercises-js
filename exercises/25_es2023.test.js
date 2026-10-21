test('25_es2023-1: Array findLast and findLastIndex', () => {
    // Utilitza `findLast()` i `findLastIndex()` per trobar l’últim número parell i la seva posició dins de l’array.
    const array = [1, 2, 3, 4, 5];
    const isEven = (number) => number % 2 === 0;
    const lastEven = array.findLast(isEven); // Resol aquí...
    const lastEvenIndex = array.findLastIndex(isEven); // Resol aquí...

    expect(lastEven).toBe(4);
    expect(lastEvenIndex).toBe(3);
});

test('25_es2023-2: Symbol.prototype.description', () => {
    // Crea un símbol amb una descripció i comprova que es pot accedir a través de la propietat `description`.
    const symbol = Symbol(`description`); // Resol aquí...

    expect(symbol.description).toBe('description');
});
