const cart=[];

const handleCart = (state = cart, action) => {

    const product=action.payload;
    const id=action.payload;


    switch (action.type) {

        case "ADDITEM": 
            return[...state,{...product,qty:1,addcartbtnclick:true}];
        break;

        case "DELITEM": 
            return state.filter((x)=>x.id!==id);
        break;

        case 'ADDQTY':
        return state.map((x)=>
                x.id===id?{...x,qty:x.qty+1}:x
            );
        break;

        case 'DECQTY':
        return state.map((x)=>
                x.id===id?
                (x.qty===1?state.filter((x)=>x.id!==id):{...x,qty:x.qty-1}):x
            );
        break;

        case 'CLEARCART':
        return state.filter((x)=>x.id===-1);
        break;

        default:
            return state;
    }
}

export default handleCart;