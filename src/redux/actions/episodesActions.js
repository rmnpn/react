const episodeActionTypes = {
    SET:'SET'
}
const episodesActions = {
    set:(payload)=> ({type: episodeActionTypes.SET, payload})
}

export  {
    episodesActions,
    episodeActionTypes
}