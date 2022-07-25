 import {useState} from 'react';
 
 
 const Task=({deleteItems,...props})=>{ 
     const [editable,setEditable]=useState(false)

  
    return<>
   
       <div className='border-2 border-blue-600 bg-blue-700 w-max p-3 rounded-sm text-white z-10'>
           {editable?
            <>
             <h1 contentEditable={true} suppressContentEditableWarning={true}>{props.tasks}</h1>  
             <p contentEditable={true} suppressContentEditableWarning={true}>{props.timing} </p>
            </> :
            <>
             <h1 >{props.tasks}</h1>  
             <p >{props.timing}</p>
            </>
            }
           
            <div className='flex gap-2 pt-2'>
                <button className='bg-white p-1 rounded-md border-2 border-blue-600 text-blue-600' onClick={()=>setEditable(!editable)}>{!editable?"Edit":"Save"}</button>
                <button className='bg-white p-1 rounded-md border-2 border-blue-600 text-blue-600' onClick={deleteItems.bind(this,props.id)}>Delete</button>
            </div>
        </div>
      
    </>
  }
  
  export default Task;