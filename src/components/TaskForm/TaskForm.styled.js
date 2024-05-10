import {styled} from '@mui/material/styles';
import {Button, FormControl, TextField} from '@mui/material';
import {Form} from 'formik';

export const StyledForm = styled(Form)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
}));

export const StyledButton = styled(Button)(({theme}) => ({
    marginTop: theme.spacing(1),
}));

export const StyledTextField = styled(TextField)(({theme}) => ({
    margin: theme.spacing(1, 0),
}));

export const StyledFormControl = styled(FormControl)(({theme}) => ({
    margin: theme.spacing(1, 0),
}));
