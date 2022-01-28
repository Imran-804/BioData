
const Education = (props) => {

    return(
        <div className='Education'>
        <p>{props.Education}</p>
        <ul>
          <li>Higher Secondary Certificate (H.S.C).</li>
          <li>Name Of Institute	: {props.Name_of_Institute} </li>
          <li>Group : {props.Group} </li>
          <li>Session : {props.Session} </li>
          <li>Passing Year : {props.Passing_Year} </li>
          <li>Result : {props.Result} </li>
          <li>Board : {props.Board} </li>
        </ul>
        </div>
    );
}






export default Education;


