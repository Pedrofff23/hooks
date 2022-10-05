import reducer from "./reducers";
import { add2 } from "./actions/number";

const initialState = {
    cart: [{}],
    products: [{}, {}],
    user: null,
    //focus...
    number: 0,
  };

  
export {
    reducer,
    initialState
}