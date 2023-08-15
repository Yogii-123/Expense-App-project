import './Filter.css';

function Filter(props){
    function yearprint(e){
        props.yearprint(e.target.value)
    }

    
    return(
        <div>
            <div className='over'>
           <p className="para">Filter By Year</p>

           <select className="select" onChange={yearprint} value={props.option1}>
           <option className='opt1'>Select a year</option>
               <option className='opt2'>2023</option>
               <option className='opt3'>2022</option>
               <option className='opt4'>2021</option>
           </select>
           </div>
        </div>
    );
}
export default Filter;