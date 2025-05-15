/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`newstudent`}>
        <button className="btn primary">Add New Student</button>
      </Link>
    </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students</h1>

      {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>
              {student.campus &&(
                <Link to={`/campus/${student.campusId}`}>
                  <h3>{student.campus.name}</h3>
                 </Link>)
              }
              
              <h3>Email: {student.email}</h3>
              {student.gpa &&
                 <h3>GPA: {student.gpa}</h3>
              } 
              <div className="btn-container">
                <button className="btn accent" onClick={() => deleteStudent(student.id)}>Delete</button>
                <Link to ={`/editstudent/${student.id}`}>
                <button className="btn primary">Edit</button>
                </Link>
              </div>
              <hr/>
            </div>
          );
        }
      )}
      <br/>
      <Link to={`/newstudent`}>
        <button className="btn primary">Add New Student</button>
      </Link>
      <br/><br/>
    </div>
  );
};


export default AllStudentsView;