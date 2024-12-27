import * as React from "react"
class StateExample extends React.Component{
    state={
        first:true,
        second:false,
        clr:'red',
        txt:'Hello'
    };
    constructor(){
        super();
        setTimeout(() =>{
            this.setState({
                first:false,
                second:true,
                clr:'blue',
                txt:'CED Division '
            });
        },10000)
    }
    render(){
        const{first,second,clr,txt}= this.state;
        return(
            <div>
                <button disabled ={first}>Button1</button>
                <button disabled ={second}>Button2</button>
               <label style={{color:clr}}>{txt}</label>
            </div>
        )
    }
}
export default StateExample;