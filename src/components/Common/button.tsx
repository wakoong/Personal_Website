import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  })
);

//Button Color - default, primary, secondary, disabled, link, upload, inherit
export default function OutlinedButtons() {
  const classes = useStyles();
  const {button-color} = this.props;
  return (
    <div>
      <Button
        variant="outlined"
        color={button-color}
        className={classes.button}
      >
        {BUTTON_TEXT}
      </Button>
    </div>
  );
}
