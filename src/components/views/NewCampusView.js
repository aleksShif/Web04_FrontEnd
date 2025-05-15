/*==================================================
NewCampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new campus page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const NewCampusView = (props) => {
  const {handleChange, handleSubmit } = props;

  // Render a New Student view with an input form
  return (
    <div>
      <h1>New Campus</h1>

      <div>
        <div className="form-container">
          <div className="form-title">
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              Add a Campus
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <div className="form-row">
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Name: </label>
            <input type="text" name="name" onChange ={(e) => handleChange(e)} />
            </div>

            <div className="form-row">
              <label style={{color:'#11153e', fontWeight: 'bold'}}>Address: </label>
              <input type="text" name="address" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-row">
              <label style ={{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
              <input type="text" name="description" onChange={(e) => handleChange(e)} />
            </div>
            {/* <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Id: </label>
            <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
            <br/>
            <br/> */}
            <label style ={{color:'#11153e', fontWeight: 'bold'}}>imageUrl: </label>
            <input type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            <Button variant="contained" color="primary" type="submit">
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

export default NewCampusView;