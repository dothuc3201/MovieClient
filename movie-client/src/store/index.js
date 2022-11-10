import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { createStore } from "vuex";

const store = createStore({
  
    state,
    getters,
    mutations,
    actions,

});

export default store;