import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles';


const styles = {

}

export default props =>
  <AppBar position="static" color="primary">
    <Toolbar >
      <Typography variant="headline" color="inherit" >
       Exercise DB
      </Typography>
    </Toolbar>
  </AppBar>
