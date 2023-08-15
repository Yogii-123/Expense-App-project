
import '../../App.css';

import NewExpense from "./NewExpense";


function ExpenseItem(props) {
    return(
        <div className='ab'>
              <div className='a'>

                   <div className='boxbtn'><NewExpense v={props.date2}></NewExpense>
                   </div>
                   <p className='expense'>{props.title} </p>
                    <p className='expense1'>{props.amount}</p>

             </div>
       </div>

    );
}
export default ExpenseItem;
