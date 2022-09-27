import GeneralActions from "../Actions/GeneralActions"
const initialState={
    isLoading:true,
    token:""
}

const GeneralReducer=(state=initialState,action)=>{
    switch(action.type){
        case GeneralActions.types.SetAppLoading:
            return{...state,isLoading:action.payload}
        case GeneralActions.types.SetToken:
            return{...state,token:action.payload}
        case GeneralActions.types.setLocation:
            return{...state,locations:action.payload}
        default: 
         return state

    }

}
export default GeneralReducer