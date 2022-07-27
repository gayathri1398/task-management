 import {useState} from 'react';

 
 
 const Task=({deleteItems,handleOnChange, updatingTasks,...props})=>{ 
     const [editable,setEditable]=useState(false);
     const [editTasks,seteditTasks] = useState("");

     const editHandler=()=>{
        setEditable(!editable);
        seteditTasks("");
        let getArray= JSON.parse(localStorage.getItem("todoTask"));
        // console.log(getArray);
        let ans =getArray.filter((item)=>{
           if( item.id===props.id){
            item.tasks=editTasks;
           }
        //    localStorage.setItem("todoTask",JSON.stringify(item))
           console.log(item)
        })
           
        console.log(ans);
        // let ansOfans = {...ans,tasks:editTasks}
      
        // console.log(editTasks);
        
        

     } 


    //  const updateTask =(e)=>{
    //     // seteditTasks()
    //     // seteditTasks(e.target.value)
    //     console.log(editTasks);
    //     editHandler();
    //  }


    return<>
   
       <div className='border border-blue-400 bg-blue-500 shadow-lg shadow-blue-300 w-max rounded-md p-6 text-white z-10 font-semibold'>
           {editable?
            <>
             <h1 contentEditable={true} suppressContentEditableWarning={true} className='font-semibold' onInput={e => seteditTasks(e.currentTarget.textContent)}>{editTasks}</h1>  
             <p contentEditable={true} suppressContentEditableWarning={true} className='font-normal'>{props.timing} </p>
            </> :
            <>
             <h1 className='font-semibold'>{props.tasks}</h1>  
             <p className='font-normal'>{props.timing}</p>
            </>
            }
           
            <div className='flex gap-2 pt-2'>
                {editable?<>
                    <button className='bg-white px-2 py-1 rounded-md border-2 border-blue-600 text-blue-600 font-semibold ' onClick={editHandler}>
                     Save
                    </button></>
                    :
                     <>
                     <button className='bg-white px-2 py-1 rounded-md border-2 border-blue-600 text-blue-600 font-semibold ' onClick={editHandler}>
                      Edit
                    </button></>}
                {/* <button className='bg-white px-2 py-1 rounded-md border-2 border-blue-600 text-blue-600 font-semibold ' onClick={editHandler}>
                    {!editable?"Edit":"Save"}
                    </button> */}
                <button className='bg-white px-2 py-1 rounded-md border-2 border-blue-600 text-blue-600 font-semibold ' onClick={deleteItems.bind(this,props.id)}>
                    Delete
                    </button>
            </div>
        </div>
      
    </>
  }
  
  export default Task;