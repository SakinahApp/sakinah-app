import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

interface Data {
  data: string[];
  title: string;
}

export default function CheckboxesGroup({ data, title }: Data) {
  const [state, setState] = React.useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          {data.map((item) => (
            <FormControlLabel
              control={<Checkbox onChange={handleChange} name={item} />}
              label={item}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
