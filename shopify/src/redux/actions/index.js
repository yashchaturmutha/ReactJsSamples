export const addCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
}

export const delCart = (product) => {
    return {
        type: 'DELITEM',
        payload: product
    }
};

export const clearCart = () => {
    return {
        type: 'CLEARCART'
    }
};

export const addQty = (id) => {
    return {
        type: 'ADDQTY',
        payload: id
    }
};

export const decQty = (id) => {
    return {
        type: 'DECQTY',
        payload: id
    }
};
