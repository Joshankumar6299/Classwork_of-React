import { useState } from "react";
import CnacelRequest from "./Cancelrequest";

const Setshow = ({varx}) => (varx ? <CnacelRequest/>:null);

function ReqCancel(){
    const [show , setShow] = useState(false);
    return(
        <>
        <button onClick={() => setShow(!show)}>
            { show ? "Hide user": "Show user"}
        </button>
        <Setshow varx={show}/>
        </>
    )
}
export default ReqCancel;