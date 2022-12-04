export default{
    //kiểm soát loader
    controllLoader({ commit, state }){
        commit("setShowLoading", !state.isShowLoading);
    },

    //set lại film id
    changeFilmId({commit}, payload){
        commit("setFilmId", payload);
    },

    //set lại cinemaId
    changeCinemaId({commit}, payload){
        commit("setCinemaId", payload);
    },

    changeAreaId({commit}, payload){
        commit("setAreaId", payload);
    },

    changeCinemaName({commit}, payload){
        commit("setCinemaName", payload)
    },

    changeData({commit}, payload){
        commit("setData", payload)
    },

    changeShedules({commit}, payload){
        commit("setSchedules", payload)
    },

    changeToken({commit}, payload){
        commit("setToken", payload)
    },

    changeIsAdmin({commit}, payload){
        commit("setAdmin", payload)
    },
    
    changeDataUser({commit}, payload){
        commit("setDataUser", payload)
    },
}