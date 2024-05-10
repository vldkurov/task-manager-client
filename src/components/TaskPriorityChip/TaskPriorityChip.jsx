import React from 'react';
import {useTheme} from '@mui/material/styles';
import Chip from '@mui/material/Chip';

const TaskPriorityChip = ({priority}) => {
    const theme = useTheme();

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high':
                return theme.palette.error.main; // Using the default error color for high priority
            case 'medium':
                return theme.palette.warning.main; // Default warning color for medium priority
            case 'low':
                return theme.palette.success.main; // Success color for low priority
            default:
                return theme.palette.grey[500];  // Neutral color for undefined priorities
        }
    };

    return (
        <Chip label={priority} style={{backgroundColor: getPriorityColor(priority), color: 'white'}}/>
    );
};

export default TaskPriorityChip;
