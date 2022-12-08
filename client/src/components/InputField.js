import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  const { id, label, name, type, value, onChange } = props;
  return (
    <Box sx={{ margin: "10px 0" }}>
      <TextField
        fullWidth
        id={id}
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        variant="standard"
      />
    </Box>
  );
};

export default InputField;
