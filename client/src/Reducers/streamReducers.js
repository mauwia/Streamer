import _ from 'lodash'
export default (state={},action)=>{
    switch(action.type){
        case 'CREATESTREAM':
            return {...state,[action.payload.id]:action.payload}
        case 'EDITSTREAM':
            return {...state,[action.payload.id]:action.payload}
        case 'GETSTREAM':
            return{...state,[action.payload.id]:action.payload}
        case 'DELETESTREAM':
            return _.omit(state,action.payload)
        case 'GETSTREAMS':
            return {...state,..._.mapKeys(action.payload,'id')}
        default:
            return state
    }
}