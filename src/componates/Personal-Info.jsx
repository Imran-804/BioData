const PersonalInfo = (props) => {
    return(
        <div className="Personal-Info">
            <h3>CV OF {props.CvName}</h3>
      
        <p>{props.self}</p>
        <ul>
          <li>Name : {props.Name} </li>
          <li>Address : {props.Address} </li>
          <li>Phone : {props.Phone} </li>
          <li>Email : {props.Email} </li>
          <li>github : {props.github} </li>
          </ul>
          </div>
    );
}






export default PersonalInfo;