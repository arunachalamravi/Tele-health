import { InputAdornment, TextField, Typography } from '@mui/material';
import { inputBox_style } from './style';

export const  InputField=(props)=> {
  const {
    value,
    fullWidth = true,
    isReadOnly = false,
    helperText = '',
    isError = false,
    isMulti = false,
    rowMax = 5,
    rowMin = 5,
    placeholder = '',
    size = 'small',
    onChange = () => false,
    endAdornment,
    startAdornment,
    type = '',
    onClick = () => {},
    errorMessage = '',
    variant = 'outlined',
    textFieldStyle = {},
    className = '',
    // defaultValue = '',
    autoFocus = false,
    id = '',
    ...rest
  } = props;

  return (
    <>
      <TextField
        id={id}
        type={type}
        size={size}
        sx={{ ...inputBox_style.textFieldSx, ...textFieldStyle }}
        variant={variant}
        value={value}
        onClick={onClick}
        placeholder={placeholder}
        fullWidth={fullWidth}
        disabled={isReadOnly}
        multiline={isMulti}
        maxRows={rowMax}
        minRows={rowMin}
        onChange={onChange}
        helperText={helperText}
        error={!!isError}
        autoFocus={autoFocus}
        className={`${className}`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ),
        }}
        {...rest}
      />
      {isError && (
        <Typography sx={{ mt: 0.5 }} variant="caption" color="error">
          {errorMessage}
        </Typography>
      )}
    </>
  );
}

