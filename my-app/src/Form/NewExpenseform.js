import './Sample.css';
import { useState } from "react";
import ExpenseSampleForm from "./ExpenseSampleForm"
function NewExpenseform(props){

    const[editing,setediting]=useState(false)


    function newexp (assign1){
        props.r(assign1)
		// console.log(assign1);
	  }
      function startedit(){
        setediting(true)
      }
      function cancelbtn(){
        setediting(false)
      }

    return(
        <div>
        <button className="btn1">Expense App</button><br></br>
            {/* <ExpenseSampleForm onSaveassign1={newexp}></ExpenseSampleForm>  */}
            <div className=''>
            {/* {editing?<ExpenseSampleForm onSaveassign1={newexp} value={editing}></ExpenseSampleForm>:<div className='formbtn'> <button onClick={startedit} className='formbtn1'>Add New Expense</button></div>} */}
          {/* {editing?<ExpenseSampleForm onSaveassign1={newexp} onCancel={cancelbtn}></ExpenseSampleForm>:<div className='formbtn'> <button onClick={startedit} className='formbtn1'>Add New Expense</button></div>} */}

                 {editing?<ExpenseSampleForm onSaveassign1={newexp} cancelbtn={cancelbtn}></ExpenseSampleForm>:<div className='formbtn'> <button onClick={startedit} className='formbtn1'>Add New Expense</button></div>}

        </div>
        </div>

    );
}
export default NewExpenseform;                                                              