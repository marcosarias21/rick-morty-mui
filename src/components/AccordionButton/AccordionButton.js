import {
  Accordion, AccordionDetails, AccordionSummary, ToggleButton, ToggleButtonGroup, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import './accordionbutton.css';

const AccordionButton = () => {
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Accordion sx={{ width: 290, mt: 3 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Filter By Specie</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ToggleButtonGroup
          sx={{ gap: 1 }}
          color="error"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton sx={{ border: '0px solid black' }} className='borderToggle' value="web">Human</ToggleButton>
          <ToggleButton sx={{ border: '0px solid black' }} className='borderToggle' value="android">Aliens</ToggleButton>
          <ToggleButton sx={{ border: '0px solid black' }} className='borderToggle' value="ios">Humanoid</ToggleButton>
        </ToggleButtonGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionButton;
