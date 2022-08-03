 import {useState} from 'react';

 
 
 const Task=({deleteItems,handleOnChange,...props})=>{ 
     const [editable,setEditable]=useState(false);
     const [editTasks,seteditTasks] = useState("");
     const [getEdit,setGetEdit] =useState("");

     
     const editHandler=(e)=>{
        e.preventDefault();
         setEditable(!editable);
         seteditTasks("");
         let getArray= JSON.parse(localStorage.getItem("todoTask"));
         getArray.map((item)=>{
           if( item.id===props.id){
            item.tasks=editTasks;
           }
           setGetEdit(editTasks);
        //    console.log(item);
    }
    )
        // return getArray;
        console.log(getArray);
       localStorage.setItem("todoTask",JSON.stringify(getArray))
 
        // console.log(ans);
        // let ansOfans = {...ans,tasks:editTasks}
      
        // console.log(editTasks);
        
        

     } 

    //  useEffect(() => {
    //    localStorage.setItem("todoTask",getArray)
    //  }, [getArray])

    return<>
   
       <div className='border border-blue-400 bg-blue-500 shadow-lg shadow-blue-300 w-max rounded-md p-6 text-white z-10 font-semibold'>
           {editable?
            <>
             <h1 contentEditable={true} suppressContentEditableWarning={true} className='font-semibold' onInput={(e)=>seteditTasks(e.currentTarget.textContent)}>
                {getEdit}
             </h1>  
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
                
                <button className='bg-white px-2 py-1 rounded-md border-2 border-blue-600 text-blue-600 font-semibold ' onClick={deleteItems.bind(this,props.id)}>
                    Delete
                    </button>
            </div>
        </div>
      
    </>
  }
  
  export default Task;