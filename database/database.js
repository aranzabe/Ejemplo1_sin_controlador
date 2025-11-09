let valores = [1,2,3,4,5]

export const addValue = (valor) => {
    valores.push(valor);
}

export const addValueAt = (nuevoValor,i) => {
    valores.splice(i, 0, nuevoValor);
}

export const getValues = () => {
    return valores;
}

export const getValue = (i) => {
    return valores[i];
}

export const removeValueAt = (i) => {
    valores.splice(i, 1);
}

export const updateValueAt = (i, p) => {
    valores[i] = p;
}

export const size = () => {
    return valores.length
}

// export {
//     getValores,
//     getValorAt,
//     size
// }