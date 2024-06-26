import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTask, fetchTasks} from "../../features/tasks/taskOperations";
import {Box, Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tasks = useSelector(state => state.tasks.items);
    const status = useSelector(state => state.tasks.status);

    const [sortedFilteredTasks, setSortedFilteredTasks] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('title');
    const [filterPriority, setFilterPriority] = useState('');
    const [filterStatus, setFilterStatus] = useState('');

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    useEffect(() => {
        let filteredTasks = [...tasks];  // Create a shallow copy of tasks array

        if (filterPriority) {
            filteredTasks = filteredTasks.filter(task => task.priority === filterPriority);
        }
        if (filterStatus) {
            filteredTasks = filteredTasks.filter(task => task.status === filterStatus);
        }

        // Sort using a copy of the array to prevent mutation
        filteredTasks.sort((a, b) => {
            if (a[sortCriteria] < b[sortCriteria]) {
                return -1;
            }
            if (a[sortCriteria] > b[sortCriteria]) {
                return 1;
            }
            return 0;
        });
        setSortedFilteredTasks(filteredTasks);
    }, [tasks, sortCriteria, filterPriority, filterStatus]);

    const handleSortChange = (event) => {
        setSortCriteria(event.target.value);
    };

    const handleFilterChange = (filterType) => (event) => {
        if (filterType === 'priority') {
            setFilterPriority(event.target.value);
        } else if (filterType === 'status') {
            setFilterStatus(event.target.value);
        }
    };

    const handleDelete = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleUpdate = (taskId) => {
        navigate(`/tasks/${taskId}`);
    };

    const handleReset = () => {
        dispatch(fetchTasks());
        setSortCriteria('');
        setFilterPriority('');
        setFilterStatus('');
    };

    const navigateToCreateTask = () => {
        navigate('/tasks/new');
    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <Button variant="contained" color="primary" startIcon={<AddIcon/>} onClick={navigateToCreateTask}>
                New Task
            </Button>
            {tasks.length > 0 && <Button onClick={handleReset} color="secondary">Reset Task List</Button>}

            {tasks.length > 0 && <>
                <FormControl fullWidth>
                    <InputLabel>Sort By</InputLabel>
                    <Select
                        value={sortCriteria}
                        label="Sort By"
                        onChange={handleSortChange}
                    >
                        <MenuItem value="title">Title</MenuItem>
                        <MenuItem value="dueDate">Due Date</MenuItem>
                        <MenuItem value="priority">Priority</MenuItem>
                        <MenuItem value="status">Status</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>Filter by Priority</InputLabel>
                    <Select
                        value={filterPriority}
                        label="Filter by Priority"
                        onChange={handleFilterChange('priority')}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>Filter by Status</InputLabel>
                    <Select
                        value={filterStatus}
                        label="Filter by Status"
                        onChange={handleFilterChange('status')}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="in progress">In Progress</MenuItem>
                        <MenuItem value="completed">Completed</MenuItem>
                    </Select>
                </FormControl>
            </>
            }


            {status === 'loading' && <p>Loading...</p>}
            {status === 'succeeded' && sortedFilteredTasks.map(task => (
                <TaskCard key={task.id} task={task} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            ))}
            {status === 'failed' && <p>Error fetching tasks.</p>}
        </Box>
    );
};

export default TaskList;

