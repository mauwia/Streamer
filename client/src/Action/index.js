import streams from '../api/stream'
import history from '../history'
export const signIn=(userId)=>{
    return {
    type:"SIGNIN",
    payload:userId
}
}

export const signOut=()=>{
    return {
    type:"SIGNOUT"
    }
}
export const createStream = formValues=> async (dispatch,getState)=>{
    let {userID}=getState().auth
    let response=await streams.post('/streams',{...formValues,userID});
    dispatch({type:'CREATESTREAM',payload:response.data})
    history.push('/');  
}
export const getStreams= ()=>async (dispatch)=>{
    let response=await streams.get('/streams')
    dispatch({type:'GETSTREAMS',payload:response.data})
}
export const getStream = id => async dispatch=>{
    let response= await streams.get(`/streams/${id}`)
    dispatch({type:'GETSTREAM',payload:response.data})
}
export const editStream =(id,formValues)=>async dispatch=>{
    let response =await streams.patch(`/streams/${id}`,formValues)
    dispatch({type:"EDITSTREAM",payload:response.data})
    history.push('/');
}
export const deleteStream = id => async dispatch=>{
     await streams.delete(`/streams/${id}`)
    dispatch({type:'DELETESTREAM',payload:id})
    history.push('/')
}