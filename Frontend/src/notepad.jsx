import { useEffect,useState } from "react";
import axios from "axios"
function TodoPage(){
    const [list,setList]=useState([])
    const [task,setTask]=useState("")
    const[successMessage,setSuccessMessage]=useState("")

    

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/create/')
        .then(response=> response.json())
        .then(data=>setList(data))
        .catch(error=>console.log(error))
    },[])

    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/create/",{
            description:task,
            completed:false
        })
        .then(res=>{
            setList([...list,res.data])
            setTask("")
            setSuccessMessage('sucessfully added')
            setTimeout(()=>{setSuccessMessage("")},3000)
        })
        .catch((error)=>console.log(error))
        
    }

    return (
        <div className="parent">

            <h1>Todo List</h1>
            {successMessage&&<p>{successMessage}</p>}
            <div className="form-div">
                <form action="" className="todo-form" onSubmit={handleSubmit}>
                    <input type='text' value={task} onChange={(e)=>setTask(e.target.value)} name='description' required placeholder="Enter Task"></input>
                    <button type='submit'>Add Task</button>
                </form>
            </div>
            <div className="view-task">
                <ul>
                    {list.map((item,id)=>
                        <li key={item.id}>
                            {item.description}
                             {item.completed ? 'completed✅' : 'Not completed ❌'}
                        </li>
                    )}
                </ul>
            </div>
                
            
        </div>
    )
        
    }
export default TodoPage;