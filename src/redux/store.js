// within this file we create our store for which we use the create store method from redux
import { createStore } from "redux";

// we've gone a little extra here (by making seperate files for defining the action and reducer)
import cakeReducer from './cake/cakeReducer'

const store = createStore(cakeReducer);

export default store
// the redux store is created
// the next step is to provide this store to our react application