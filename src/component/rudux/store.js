import { createStore } from "redux";
import subscribersReuducer from "./subscribers/reducer";

const store = createStore(subscribersReuducer);

export default store;
