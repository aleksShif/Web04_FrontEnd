/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const NewStudentView = (props) => {
  const {handleChange, handleSubmit } = props;
  // Render a New Student view with an input form
  return (
    <div>
      <h1>New Student</h1>

      <div>
        <div className="form-container">
          <div className="form-title">
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              Add a Student
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <div className="form-row">
              <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
              <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />
            </div>

            <div className="form-row">
              <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
              <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
            </div>

<<<<<<< HEAD
            <label style ={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
            <input type="email" name="email" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Id: </label>
            <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Image URL: </label>
            <input type="url" name="imageUrl" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
            <input type="number" step=".01" min="0" max="4" name="gpa" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
=======
            <div className="form-row">
              <label style ={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
              <input type="text" name="email" onChange={(e) => handleChange(e)} />
            </div>
>>>>>>> 941898da723f05e690145b9bd43c8a9a2c1fb6b8

            <div className="form-row">
              <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Id: </label>
              <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
            </div>

            <button type="submit">
              Submit
            </button>
            <br/>
            <br/>
          </form>
          </div>
      </div>
    </div>    
  )
}

export default NewStudentView;