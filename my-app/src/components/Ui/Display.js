import '../../App.css';
function Display(props) {
    return(
        <div>

            <div className='box1'>
                {props.children}
             </div>   

        </div>

    );
}
export default Display;

