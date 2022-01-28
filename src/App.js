
 import './App.css';
 import PersonalInfo from './componates/Personal-Info';
 import Education from './componates/Education';
 import Skills from './componates/Skills';
 import Interests from './componates/Interests';
 

function App() {
  return (    
    <div className='Componates'>

       {/* Personalinfo-componate-dynamic-data-start------> */}
      <PersonalInfo

        CvName = "Md Emran Hossain"
        Name = "Md Emran Hossain"
        Address ="Brahmanbaria"
        Phone ="01516094xxx"
        Email ="emranbd804@gmail.com"
        github ="github/imran804"
        self = "PERSONAL-INFO"
      /> 
       {/* Personalinfo-componate-dynamic-data-end------> */}
        
        

       {/* Education-componate-dynamic-data-start------> */}
       
      <Education
          Education = "EDUCATION"
          Higher Secondary Certificate-
          Name_of_Institute = "Jatir Pita Bangabandhu govt college"
          Group = "Humanities"
          Session = "2016-2017"
          Passing_Year = "2018"
          Result = "3.58"
          Board = "Dhaka"
        />

       {/* Education-componate-dynamic-data-end------> */}





       {/* Skills-componate-dynamic-data-start------> */}

      <Skills
        Skills =  {["html", "css", "boostrap", "javascript","photoshop", "Figma" ]}
      />

       {/* Skills-componate-dynamic-data-end------> */}




       {/* Interests-componate-dynamic-data-start------> */}

      <Interests
          Interests = {["MongoDB", "Express js", "React js", "Node js"]}
      />

       {/* Interests-componate-dynamic-data-end------> */}

  </div>
     
  );
}

export default App;
