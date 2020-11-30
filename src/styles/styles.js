import styled from "styled-components";
import {animation} from "./default";



export  const StContent = styled.div`
  width: 100%;
  padding: 50px 20px;
  overflow: hidden auto;
  

`

export const StInput = styled.input`
  height: 30px;
  width: ${props=>props.readOnly?props.w:"calc((100% - 140px)/3)"};
  background-color: ${props=>props.color || "#eeeeee"};
  margin-top: 5px  ;
  margin-left: ${props=>props.readOnly?0:10}px ;
  box-shadow: ${props=>props.readOnly?"none":"0 0 5px #454545"};
  padding: 0 5px;
`

export const StItem = styled.div`
  width: 100%;
  height: ${props=>props.status?40:0}px;
  overflow: hidden;
  ${animation(["height","margin"])};
  background-color: #eeeeee;
  box-shadow: 0 0 5px #454545;

  margin: ${props=>props.status?10:0}px 0 0;
  .pin{
    
  
    display: inline-block;
    float:left;
  }
  .header{
    font-size: 20px;
    line-height: 40px;
    margin-left: 20px;
    //width: 20%;
    
    display: inline-block;
    float:left;
  }
  .description{
    //width: calc(80% - 110px);
    
    line-height: 40px;
    display: inline-block;
    float:left;
    margin-left: 20px;

  }
  .ctrl{
     
    height: 40px;
    display: inline-block;
    float:right;
    button{
      width: 30px;
      height: 30px;
      margin: 5px;
      display: inline-block;
      float:left;
      &.save{background-color: green}
      &.edit{background-color: yellowgreen}
      &.remove{background-color: red}
      &.cancel{background-color: yellow}
    }
    
  }
`
export const StNewItem = styled(StItem)`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  margin: -10px 0 ;
  box-shadow: none;
  padding: 0 20px;
  background-color: white;
`