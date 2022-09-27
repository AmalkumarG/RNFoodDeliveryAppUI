const types={
    SetAppLoading:"SetAppLoading",
    SetToken:"SetToken",
    setLocation:"setLocation"
}



const setisApploading=(isLoading)=>{
return{
    type:types.SetAppLoading,
    payload:isLoading
}
}

const setToken=(token)=>{
    return{
        type:types.SetToken,
        payload:token

    }
}

const setLocation=(locations)=>{
    return{
        type:types.setLocation,
        payload:locations
    }
}

export default {setisApploading,setToken,types,setLocation}