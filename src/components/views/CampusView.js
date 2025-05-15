/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import "./style.css";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <div className="card">
        <h2>Students</h2>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div className="card-icon"style={{display: "flex", flexDirection: "column", alignItems: "center"}}key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h3 className="card-link">{name}</h3>
              </Link>             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CampusView;