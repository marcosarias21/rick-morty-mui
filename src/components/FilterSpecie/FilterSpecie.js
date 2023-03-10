import {
  Accordion, AccordionDetails, AccordionSummary, ToggleButton, ToggleButtonGroup, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCharacterBook } from '../../store/characterStore';
import './FilterSpecie.css';

const FilterSpecie = () => {
  const { specie, specieSelect } = useCharacterBook();

  const handleChange = (event) => {
    specieSelect(event.target.value);
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
          value={specie}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton sx={{ border: '0px solid black' }} className='borderToggle' value="human">Human</ToggleButton>
          <ToggleButton sx={{ border: '0px solid black' }} className='borderToggle' value="alien">Aliens</ToggleButton>
          <ToggleButton sx={{ border: '0px solid black' }} className='borderToggle' value="humanoid">Humanoid</ToggleButton>
        </ToggleButtonGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterSpecie;
