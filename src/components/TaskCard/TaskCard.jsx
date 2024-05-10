import React from 'react';
import {Button, CardActions, CardContent, CardHeader, Chip, Typography} from '@mui/material';
import TaskPriorityChip from "../TaskPriorityChip/TaskPriorityChip";
import {StyledCard} from './TaskCard.styled'


const TaskCard = ({task, handleDelete, handleUpdate}) => (
    <StyledCard raised>
        <CardHeader
            title={task.title}
            subheader={`Due: ${task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No deadline'}`}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {task.description}
            </Typography>
            <TaskPriorityChip priority={task.priority}/>
            <Chip label={task.status} style={{marginLeft: '10px'}}/>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary" onClick={() => handleDelete(task.id)}>
                Delete
            </Button>
            <Button onClick={() => handleUpdate(task.id)}>View</Button>
        </CardActions>
    </StyledCard>
);

export default TaskCard;
