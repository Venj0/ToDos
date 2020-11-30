import React from "react"
import {StNewItem} from "../styles/styles";
import {Item} from "./item";

let newItem = {
    title: "",
    description: "",
    color: ""
}
export const ItemCreator = ({callBacks}) =>  <StNewItem>
            <Item data={newItem} callBacks={callBacks} type={true} newItem={true}/>
        </StNewItem>
