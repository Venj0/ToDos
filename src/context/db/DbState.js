import React from "react"

import {DbContext} from "./dbContext";
import {Actions} from "../../url";

// let items = [
//     {
//
//         title: "0fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "1fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "2fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "3fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "4fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//         title: "5fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//         title: "6fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "7fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "8fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "9fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "10fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "11fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "12fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//          title: "13fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "14fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//         title: "15fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "16fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "17fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "18fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//         title: "19fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     },
//     {
//
//         title: "20fsdfsd",
//         description: "asfdsdfasdf",
//         color: "asfdasdfasdfasd"
//     }
// ]

export const DB = ({children}) => {
    const get = async ({url, method, body, callBack, ErrorCallBack}) => {


        let init = {
            method,
            body,
            headers: new Headers({
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "X-Requested-With": "XMLHttpRequest",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                'Content-Type': 'application/json',

            })
        }
        await fetch(url, init)
            .then(async res => {

                if (!res.ok || res.status !== 200) {
                    console.log(res)
                    ErrorCallBack()
                } else {
                    return res.json()
                }
            })
            .then(res =>   callBack(res) )
            .catch(async error => {
                console.log(error)
                ErrorCallBack()
            } )
        //


        // if (method === "GET") callBack(JSON.parse(JSON.stringify((body.id !== undefined) ? items[body.id] : items)))
        // if (method === "POST") {
        //     items.push(body )
        //     callBack(body )
        // }
        // if (method === "PATCH") {
        //     items = items.map((item ,i)=> i === body.id ? body : item)
        //     // return {...body, id: items.length}
        //     callBack(body)
        // }
        // if (method === "DELETE") {
        //
        //     let newItems = []
        //     let id = 0;
        //     items.map((item ,i)=> i !== body.id ?newItems.push({...item,id:id++}) : 0)
        //     items = newItems
        //     callBack(body.id)
        //     // console.log(items)
        // }
        // console.log(method)

    }
    const fetchData = (type, callBack, ErrorCallBack, args = {}) =>
        get({...Actions(type, args), callBack, ErrorCallBack})


    return (
        <DbContext.Provider value={{fetchData}}>
            {children}
        </DbContext.Provider>
    )
}