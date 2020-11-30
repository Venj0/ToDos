import React, {useState} from "react"
import {StInput, StItem} from "../styles/styles";

export const Item = ({data, callBacks,type=false,newItem=false, id}) => {
    let [state, setState] = useState(data)
    let [edit, setEdit] = useState(type)
    let [status, setStatus] = useState(true)
    let save = () =>{
        if(newItem){
            callBacks.newItem(state)
            setState({
                title: "",
                description: "",
                color: ""
            })

        }
        else{
            callBacks.edit( state )
            setEdit(false)
        }
    }
    let remove = () =>{
        setStatus(false)
        setTimeout(()=>{
            callBacks.remove({_id:state._id})
        },500)
    }
    let closeEditor = ()=>{
        setState(data)
        setEdit(false)
    }

    return (
        <StItem status={status}>
             <StInput w={"10px"} color={edit?"":state.color} className="pin" readOnly={!edit} value={edit?state.color:""} onChange={e=>setState({...state,color:e.target.value})} placeholder ={"color"}/>
             <StInput w={"100px"}  className="header" readOnly={!edit} value={state.title} onChange={e=>setState({...state,title:e.target.value})} placeholder ={"title"}/>
             <StInput w={"200px"}   className="description" readOnly={!edit} value={state.description} onChange={e=>setState({...state,description:e.target.value})} placeholder ={"description"}/>



            <div className="ctrl">
                {
                    edit
                        ? <>
                            <button className={"save"} onClick={() => save() }><i className="far fa-check"/></button>
                            { newItem ?
                                null
                                :<button className={"cancel"} onClick={() => closeEditor( )}><i className="far fa-times"/></button>
                            }
                        </>
                        : <>
                            <button className={"edit"} onClick={() => setEdit(true)}><i className="fal fa-edit"/></button>
                            <button className={"remove"} onClick={() =>remove()}><i className="far fa-trash-alt"/></button>
                        </>

                }
            </div>
        </StItem>
    )
}