import '../../App.css';
import { useState } from 'react';


function NewExpense(props){

    let month1=props.v.toLocaleString('en-US',{month:'long'});
    let date2=props.v.getDate();
    let year1=props.v.getFullYear();

    const [name,setname]=useState(month1)
    function sample2(){
        setname("updating");
        console.log(month1);
    }

    return(
        <div>
            <h3 className='head1'>{name}<br></br>{date2}<br></br>{year1}</h3>
     <div className='btn2'>
            <button onClick={sample2} className='btn3'>button</button>
     </div>
          
  </div>

    );
}

export default NewExpense;
