const Skills = (props) => {
    return(
        <div className="Skills">
            <p>SKILLS</p>
           <ul>
           {props.Skills.map(Skill => (
                <li> {Skill}</li>
            ))}
           </ul>
        </div>
    );
}







export default Skills;