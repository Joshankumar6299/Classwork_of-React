import * as React from 'react';
import MyList from './propExamp3';
import MyButton from './propExamp2';

class PropExample extends React.Component{
   state={
    text:'My Button',
    disabled:false,
    items:['one','ice cream','popcon','orange'],
   };
   constructor(){
        super();
        setTimeout(() => {
            this.setState({
                disabled:false,
                text:"Hello World!",
                items:["apple","banana","cherry","date"],
            })
        },2000);
   }
   render(){
    const {text,disabled,items} = this.state;
    return(
        <div>
            <MyButton 
                 text={text}
                disabled={disabled} />

            <MyList items={items}/>
        </div>
        )
   }  
}
export default PropExample;