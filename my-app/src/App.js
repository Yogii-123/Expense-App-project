import { useState } from 'react';
import './App.css';
import ExpenseIte from './components/Expense/ExpenseIte'
import NewExpenseform from './Form/NewExpenseform';
import './App.css';

function App() {
  let Dummy_Expense=[{
    id:Math.random(),
   date1:new Date("Dec 14, 2021"),
   head2:'Home Loan',
   rupee1:'Rs.7000' 
    },
   {
     id:Math.random(),
      date1:new Date("11 14, 2022"),
      head2:'Gold Loan',
      rupee1:'Rs.10,000'
   },
   {
    id:Math.random(),
     date1:new Date("11 14, 2023"),
     head2:'Car Loan',
     rupee1:'Rs.15,000'
  },
]
const[Expense,setExpense]=useState(Dummy_Expense);
     function child1 (Expense){
           setExpense((Dummy_Expense)=>{
             return[Expense,...Dummy_Expense]
           });
         }

  return (
    <div>
		 <NewExpenseform r={child1}></NewExpenseform> 
        <ExpenseIte d={Expense}></ExpenseIte>
    </div>
  );
}

export default App;
