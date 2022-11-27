export default{
    //kiểm soát loader
    controllLoader({ commit, state }){
        commit("setShowLoading", !state.isShowLoading)
    },
}