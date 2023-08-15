import '../../App.css'
import Display from '../Ui/Display';
import ExpenseItem from "./ExpenseItem";
import { useState } from 'react';
import Filter from './Filter';

function ExpenseIte(props){
      const [filteryear,setfilteryear] = useState("select");

      function yearflit(filtered){
          setfilteryear(filtered);

  }
 let filterExpense=props.d.filter((d)=>{
    return d.date1.getFullYear().toString()===filteryear;
  })

    return(
        <div>

          <Display>
                <Filter yearprint={yearflit} selected={filteryear}></Filter>

                {filterExpense.length===0 ?(<h3 className='nofound'>No Expense Found!</h3>):(filterExpense.map((ex)=>(
                   <ExpenseItem key={ex.id}
                             date2={ex.date1}
                             title={ex.head2}
                             amount={ex.rupee1}></ExpenseItem>

                                 
                ))) }
           </Display>       

        </div>
    );
}
export default ExpenseIte;
