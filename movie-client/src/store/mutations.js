export default{
    setShowLoading(state, isShowLoading){
        state.isShowLoading = isShowLoading
    },
    setFilmId(state, filmId){
        state.filmId = filmId;
    },
    setCinemaId(state, cinemaId){
        state.cinemaId = cinemaId
    },

    setAreaId(state, areaId){
        state.areaId = areaId
    },

    setCinemaName(state, cinemaName){
        state.cinemaName = cinemaName
    },

    setData(state, data){
        state.data = data
    },

    setSchedules(state, currentSchedules){
        state.currentSchedules = currentSchedules
    }
}