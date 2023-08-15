import './Sample.css';
import { useState } from 'react';



function SampleForm(props){
      const [name, setname] = useState("");
      const [namea, setnamea] = useState("");
      const [nameb, setnameb] = useState('');


    function formintro(e){
            //   console.log(e.target.value);
            //   console.log('updating');
            //   setname(e.target.value)
                  setname(e.target.value)

                    // event.preventDefault()
                    //   setname("updating")
    }
    function formin(e){
        setnamea(e.target.value)
    }
    function intro(e){
        setnameb(e.target.value)
     }
    function sub(event){
        event.preventDefault();
        // console.log(name);
        // console.log(namea);
        // console.log(nameb);
        // setname('')
        // setnamea('')
        // setnameb('')
        let assign1={id:Math.random(),date1:new Date(nameb),head2:name,rupee1:namea}
        // console.log(assign1);
        props.onSaveassign1(assign1);
        setname('')
        setnamea('')
        setnameb('')


    }



    


    return(
        <div className='overallform'>
            {/* <button className="btn1">Expense App</button><br></br> */}
           <div className='div1'>
             <form className="overall">
                
             {/* <form className="overall" onChange={formintro}> */}

                <label className="title" htmlFor='title'>Title
                </label>
                <label className="amount" htmlFor='number'>Amount
                </label><br></br>

                <input type="text" className="titleinput"  id='title'onChange={formintro} value={name}></input>
                <input type="number" className="amountinput" id='number' onChange={formin} value={namea}></input><br></br>

                <label className="date">Date<br></br>
                    <input type="date" placeholder="DD/MM/YYYY" className="dateinput" id='date' onChange={intro} value={nameb} min="2021-01-01" max="2023-12-31"></input>
                </label><br></br>
                <button onClick={props.cancelbtn} className='bt2'>Cancel</button>
                <button className='bt3' onClick={sub} id='a'>Add Expense</button>
             </form>
             </div>
        </div>
    );
}
export default SampleForm;