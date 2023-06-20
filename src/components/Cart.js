import { useDispatch, useSelector } from "react-redux"
import { changeAge } from "../redux/user"



export default function Cart(){
    let state = useSelector((state)=>state.user)
    console.log(state)
    let dispatch = useDispatch();


    return (
        <div>
            <p>{state.people}</p>
            <p>{state.age}
              <button onClick={()=>dispatch(changeAge(10))}> + </button>
            </p>
        </div>
    )
}