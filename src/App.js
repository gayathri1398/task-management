import {useState,useEffect} from 'react'

// component
import MyDialog from './components/DialogBox'
import Task from './components/TaskComp';

function App() {
  const [time,setTime] = useState([9,10,11,12,1,2,3,4,5,6,7,8]);
  const [isOpen, setIsOpen] = useState(false)
  const [tasks,setTasks] = useState("");
  const [timing,setTiming] =useState("");
  let [taskOn,setTaskOn] = useState([]);

  function closeModal() {
    setIsOpen(false)
  }

  const changeHandler=()=> {
    setIsOpen(!isOpen);
   
    }
    // Adding an item
    const handleOnChange = (e) => {
      e.preventDefault();
         if (!tasks || !timing) {
           alert("fill data");
         }
      else {
           setTaskOn([...taskOn,{tasks,timing,id:taskOn.length}]);
       closeModal(); 
      }
    }

 useEffect(()=>{
   localStorage.setItem("todoTask",JSON.stringify({taskOn}));
   if(localStorage.todoTask){
   const setTaskon =localStorage.getItem("todoTask");
   const taskon = JSON.parse(setTaskon);
    console.log(taskon);
    taskOn=taskon;
  }
 },[taskOn])
 

    // deleting an item
    const deleteItems=(id)=>{
      const setTaskon =localStorage.getItem("todoTask");
      const taskon = JSON.parse(setTaskon);
      const filTask =taskon.taskOn
     const deleteItem = filTask.filter((item)=> item.id!==id  )
     setTaskOn(deleteItem);   
   }

 
  return (
  <>
    <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} tasks={tasks} setTasks={setTasks} timing={timing} setTiming={setTiming} handleOnChange={handleOnChange} closeModal={closeModal}/>
    
     {  time.map((tm,index)=>
      <div> 
        <div className='flex items-center'>
        <button className='font-bold m-20' onClick={changeHandler}  key={index}>
          {tm}{index>=4? "PM":"AM"}
          </button> 
          <div className='flex gap-2'>
            {
              taskOn.map((tn,index)=>
                 tm===Number(tn.timing)?<Task {...tn} key={index} deleteItems={deleteItems} />
                 
                 :
                 <></> )
            }
            </div>
           
          
        </div>
           <div className='border-t-2 '/>
           
          </div>   
     )}
      
    
     </>
  );
}

export default App;
