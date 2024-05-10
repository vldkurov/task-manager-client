import {Card, styled} from "@mui/material";

export const StyledCard = styled(Card)(({theme}) => ({
    maxWidth: '100%',
    marginBottom: theme.spacing(2),
    boxShadow: theme.shadows[3],
    '&:hover': {
        boxShadow: theme.shadows[10],
    }
}));
