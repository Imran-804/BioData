function Interests (props){
    return(
        <div className="Interests">
            <p>Interests</p>
            <ul>
               {props.Interests.map(Interest =>(
                   <li>
                       {Interest}
                   </li>
               ))}
            </ul>

        </div>
    )
}







export default Interests;