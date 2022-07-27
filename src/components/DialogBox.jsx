import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

// components



 function MyDialog({isOpen,tasks,timing,setTasks,setTiming,handleOnChange,closeModal,editable,editTasks,seteditTasks}) {
 
  return (
    <>
   
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   ToDo tasks
                  </Dialog.Title>
                  
                  <div className="mt-2 flex flex-col gap-5 ">
                    <input type="text" 
                        id="task" 
                        name="task" 
                        value={tasks}
                        onChange={(e)=>setTasks(e.target.value)}
                        placeholder='Add your text' 
                        className='w-full outline-none'
                        
                       />
                       {/* {
                        editable && <input type="text" 
                        id="task" 
                        name="task" 
                        value={editTasks}
                        onChange={(e)=>seteditTasks(e.target.value)}
                        placeholder='Add your text' 
                        className='w-full outline-none'
                      
                       />
                       
                       } */}
                    <input type="text"
                        id="timing"  
                        name="timing" 
                        value={timing}
                        onChange={(e)=>setTiming(e.target.value)}
                        placeholder='Timings' 
                        className='outline-none'
                       />
                  </div>

                  <div className="mt-4">
                  <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleOnChange}
                     
                    >
                      Add Task
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-6 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-4"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      
     
    </>
  )
}

export default MyDialog;

