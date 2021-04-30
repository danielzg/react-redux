import { Reducer } from "redux";
import { ICartState } from "./types";

const INITIAL_STATE: ICardState = {
    itens: []
}

const cart:Reducer<ICartState> = () => {
    return INITIAL_STATE
}

export default cart;