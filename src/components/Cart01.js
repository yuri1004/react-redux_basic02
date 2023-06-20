import { useDispatch, useSelector } from "react-redux"
import { addCount } from "../store";

export default function Cart01(){
   let state = useSelector((state)=>state.cart)
//    console.log(state)
   let dispatch = useDispatch();



    return (
        <div>
           <ul>
            {state.map((item)=>(
                <li key={item.id}>
                <span>{item.id + 1} : </span>
                <span>{item.name} : </span>
                <span>{item.count}</span>
                <span>
                    <button onClick={()=>dispatch(addCount(item.id))}> + </button>
                </span>
                </li>
            ))}
           </ul>
        </div>
    )
}