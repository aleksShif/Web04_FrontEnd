/*==================================================
Header.js

It contains the Header component to be displayed on every page.
The header contains navigation links to every other page.
================================================== */
// Import "material" library for building UI with React components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import '../views/style.css'; 

// Define styling for the header
// const rootStyles = (() => {
//   const styles = getComputedStyle(document.documentElement);
//   return {
//     colorPrimary: styles.getPropertyValue('--color-primary').trim(),
//     colorSecondary: styles.getPropertyValue('--color-secondary').trim(),
//     colorAccent: styles.getPropertyValue('--color-accent').trim(),
//     colorBackground: styles.getPropertyValue('--color-background').trim(),
//   }
// })

// Header component, displayed on every page
// Links to every other page
const Header = () => {
  // const classes = useStyles();
  return (
    <div>
      <header position="static" elevation={0} className="navbar">
        <Toolbar>
          <h1>
            Campus Management System
          </h1>

          <nav className="button-header-nav">
              <Link className="navbar-link" to={'/'} >
                <Button variant="contained" className="btn-primary">
                  Home
                </Button>
              </Link>

              <Link className="navbar-link" to={'/campuses'} >
                <Button variant="contained"  className="btn-primary">
                  All Campuses
                </Button>
              </Link>

              <Link className="navbar-link" to={'/students'} >
                <Button variant="contained" className="btn-primary">
                  All Students
                </Button>
              </Link>
            </nav>
        </Toolbar>
      </header>
    </div>
  );    
}

export default Header;
