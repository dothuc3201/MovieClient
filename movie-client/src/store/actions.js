export default{
    //kiểm soát loader
    controllLoader({ commit, getters }){
        commit("setShowLoading", !getters.isShowLoading)
    },
}