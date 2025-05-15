/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student, deleteStudent } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      {student.imageUrl &&
        <img src={student.imageUrl}></img>
      }
      {student.campus &&(
                <Link to={`/campus/${student.campusId}`}>
                  <h3>{student.campus.name}</h3>
                 </Link>)
      } 
      <h3>Email: {student.email}</h3>
      
      {student.gpa &&
        <h3>GPA: {student.gpa}</h3>
      } 

      <Link to ={`/students`}>
      <button className="btn accent" onClick={() => deleteStudent(student.id)}>Delete</button>
      </Link>
        
      <Link to ={`/editstudent/${student.id}`}>
        <button className="btn primary">Edit</button>
      </Link>
    </div>
  );

};

export default StudentView;