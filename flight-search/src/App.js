import React, { Component } from 'react';
import CityList from './components/CityList';
import './App.css';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row} from 'react-flexbox-grid';

const cities = [
  'IT',
];

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Pura vida por el mundo
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Paper>            
                <CityList cities={cities}/>
          </Paper>
        </Row>
      </Grid>
    );
  }
}

export default App;
