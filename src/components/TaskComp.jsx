 import {useState} from 'react';

 
 
 const Task=({deleteItems,handleOnChange,...props})=>{ 
     const [editable,setEditable]=useState(false);
  
     const editHandler=()=>{
        setEditable(!editable)
        // if(props.tasks && props.timing!==""){
        // handleOnChange();
        // }
        console.log(props.tasks , props.timing);
     } 


    return<>
   
       <div className='border border-blue-400 bg-blue-500 shadow-lg shadow-blue-300 w-max rounded-md p-6 text-white z-10 font-semibold'>
           {editable?
            <>
             <h1 contentEditable={true} suppressContentEditableWarning={true} className='font-semibold'>{props.tasks}</h1>  
             <p contentEditable={true} suppressContentEditableWarning={true} className='font-normal'>{props.timing} </p>
            </> :
            <>
             <h1 className='font-semibold'>{props.tasks}</h1>  
             <p className='font-normal'>{props.timing}</p>
            </>
            }
           
            <div className='flex gap-2 pt-2'>
                <button className='bg-white px-2 py-1 rounded-md border-2 border-blue-600 text-blue-600 font-semibold ' onClick={editHandler}>
                    {!editable?"Edit":"Save"}
                    </button>
                <button className='bg-white px-2 py-1 rounded-md border-2 border-blue-600 text-blue-600 font-semibold ' onClick={deleteItems.bind(this,props.id)}>
                    Delete
                    </button>
            </div>
        </div>
      
    </>
  }
  
  export default Task;