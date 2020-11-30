import React, {useContext} from "react"
import {StContent} from "../styles/styles";
import {GlobalContext} from "../context/global/globalContext";
import {ItemCreator} from "./itemCreator";
import {Item} from "./item";


export const Content = () => {
    let {
        global,
        newItem,
        removeItem,
        updateItem,

    } = useContext(GlobalContext)


    let callBacks = {
        newItem: args => newItem(args),
        remove: args => removeItem(args),
        edit: args => updateItem(args),


    }

    return (
        <StContent>
            <ItemCreator callBacks={callBacks}/>
            <hr/>
            {
                global.items.length
                    ? global.items.map(item  => <Item key={item._id}   data={item} callBacks={callBacks}/>)
                    : <h1>no item for view </h1>
            }
        </StContent>
    )
}