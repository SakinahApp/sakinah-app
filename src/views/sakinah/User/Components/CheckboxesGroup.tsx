import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { Dashboard } from "@mui/icons-material";

interface Data {
  data: string[];
  title: string;
  preferences: string[];
  setPreferences: (preferences: string[]) => void;
}

export default function CheckboxesGroup({
  data,
  title,
  setPreferences,
  preferences,
}: Data) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!preferences.includes(event.target.name)) {
      return setPreferences([...preferences, event.target.name]);
    } else {
      return setPreferences(preferences.filter((p) => p!== event.target.name));
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          {data.map((item) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={preferences.includes(item) ? true : false}
                  onChange={handleChange}
                  name={item}
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
