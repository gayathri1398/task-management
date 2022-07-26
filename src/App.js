import {useState,useEffect} from 'react';
import {ImPointUp} from 'react-icons/im'


// component
import MyDialog from './components/DialogBox'
import Task from './components/TaskComp';


function App() {
  const loadTaskOn = localStorage.getItem('todoTask')? JSON.parse(localStorage.getItem("todoTask")):[];


  const [time,setTime] = useState([9,10,11,12,1,2,3,4,5,6,7,8]);
  const [isOpen, setIsOpen] = useState(false)
  const [tasks,setTasks] = useState("");
  const [timing,setTiming] =useState("");
  const [editTasks,seteditTasks] = useState("");
  const [editTiming,seteditTiming] =useState("");
  const [id,setId] =useState(0);
  let [taskOn,setTaskOn] = useState(loadTaskOn);
 

  function closeModal() {
    setIsOpen(false)
  }

  const changeHandler=()=> {
    setIsOpen(!isOpen);
   

    }
    useEffect(()=>{  
       localStorage.setItem("todoTask",JSON.stringify(taskOn)); 
    },[taskOn])

    // Adding an item
    const handleOnChange = (e) => {
      // e.preventDefault();
         if (!tasks || !timing) {
           alert("fill data");
         }
       
      else {

           setId(id+1);
           setTaskOn([...taskOn,{tasks,timing,id}]);
           closeModal(); 
           setTasks("");
           setTiming(""); 
      }
    }

    //  editing task
    const updatingTasks =(id)=>{
      if(taskOn.id===id){
        seteditTasks()
      }
    }

 
    // deleting an item
    const deleteItems=(id)=>{
     const deletedItem = taskOn.filter((item)=> item.id!==id  )
     setTaskOn(deletedItem);  
   }

 
  return (
  <>
    <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} tasks={tasks} setTasks={setTasks} timing={timing} setTiming={setTiming} handleOnChange={handleOnChange} closeModal={closeModal}/>
     <h1 className='text-3xl pl-24 pb-8 pt-4 bg-blue-700 text-white'>Tasker</h1>
     {  time.map((tm,index)=>
      <div> 
        <div className='flex items-center'>
        <button className='font-bold m-20 border-2 p-5 rounded-full shadow-md shadow-blue-500 text-blue-500' onClick={changeHandler}  key={index}>
          {tm}{index>=4? "PM":"AM"}
          <ImPointUp />

          </button> 
         
          <div className='flex gap-2'>
            {
              taskOn.map((tn,index)=>
                 tm===Number(tn.timing)?<Task {...tn} key={tn.id} deleteItems={deleteItems} handleOnChange={handleOnChange}/>
                 :
                 <></> 
                 )
            }
            </div>
           
          
        </div>
           <div className='border-t-2 border-white'/>
           
          </div>   
     )}
      
    
     </>
  );
}

export default App;
