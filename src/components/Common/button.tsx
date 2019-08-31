import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  styled,
} from '@material-ui/core/styles';
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

// apply custom css to button

//Button Color - default, primary, secondary, disabled, link, upload, inherit
// Button_text = login
export default function OutlinedButtons({
  buttonColor = 'default',
  class_name,
}) {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="outlined"
        color={buttonColor}
        className={`${classes.button} class_name`}
      >
        {'LOGIN OUT FROM YOUR ROBINHOOD ACCOUNT'}
      </Button>
    </div>
  );
}
