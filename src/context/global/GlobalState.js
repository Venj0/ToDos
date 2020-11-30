import React, {useContext, useEffect, useReducer} from "react"
import {globalReducer} from "./globalReducer"

import {GlobalContext} from "./globalContext"
import {DbContext} from "../db/dbContext";
import {  SET } from "../type";

let initState = {
    loading: false,
    items: []
}


export const GlobalState = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, initState)
    let {fetchData} = useContext(DbContext)

    useEffect(() => {
        console.log();
        let list = storage.get()
        if (list && list.length) {

            dispatch({type: SET, items: list})
        } else {

            getAll(items => {
                dispatch({type: SET, items})
                storage.set(items)
            },()=>{console.log("can not get todo list!!! server Error!!!")})
        }
        // eslint-disable-next-line
    }, [])
    const storage = {
        get: () => JSON.parse(localStorage.getItem("toDoList")),
        set: data => localStorage.setItem("toDoList", JSON.stringify( data))
    }

    const getAll = (callBack, ErrorCallBack) => fetchData("all", callBack, ErrorCallBack)

    const getById = (args, callBack, ErrorCallBack) => fetchData("getById", callBack, ErrorCallBack, args)

    const newItem = args => fetchData("new", item => {

            dispatch({
                type: SET,
                items: [...state.items, item]
            })
        console.log([...state.items, item])
            storage.set(   [...state.items, item])
        },()=>{console.log("can not create todo!!! server Error!!!")}, args)
    const removeItem = args => fetchData("remove", id => {
        console.log(id)
        let items = []
        state.items.map(item => (item._id !== args._id) ? items.push(item) : 0)
        dispatch({type: SET, items})
        storage.set( items)
        console.log(items)
    }, ()=>{console.log("can not remove todo!!! server Error!!!")}, args)
    const updateItem = args => fetchData("update", res => {
        console.log(args)
        console.log(res)
        dispatch({
            type: SET,
            items: state.items.map(item  => (item._id  !== args._id) ? item : res)
        })
        console.log(state.items.map(item  => (item._id  !== args._id) ? item : res))
        storage.set( state.items.map(item  => (item._id  !== args._id) ? item : res))
    }, ()=>{console.log("can not edit todo!!! server Error!!!")}, args)





    return (
        <GlobalContext.Provider
            value={{
                global: state,
                getById,
                newItem,
                removeItem,
                updateItem,
                getAll

            }}>

            {children}

        </GlobalContext.Provider>
    )
}
