import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SquareCheckbox(props) {
  return (
    <div>
      <Checkbox
        {...label}
        defaultChecked color="secondary"
        sx={{ color: pink[600],
          '&.Mui-checked': {
            color: pink[300],
          }, 
        }}
        checked={props.checked}
        onClick={props.onClick}
      />
    </div>
  );
}