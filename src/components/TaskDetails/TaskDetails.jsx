import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTaskById} from '../../features/tasks/taskOperations';

const TaskDetails = () => {
    const {taskId} = useParams();
    const dispatch = useDispatch();
    const task = useSelector(state => state.tasks.currentTask);
    const status = useSelector(state => state.tasks.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTaskById(taskId));
        }
    }, [taskId, status, dispatch]);

    return (
        <div>
            {status === 'loading' && <p>Loading...</p>}
            {task && (
                <div>
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                </div>
            )}
            {status === 'failed' && <p>Error fetching the task.</p>}
        </div>
    );
};

export default TaskDetails;
