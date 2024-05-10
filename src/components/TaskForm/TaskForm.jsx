import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import {MenuItem} from '@mui/material';
import {Select as FormikSelect} from 'formik-mui';
import {createTask, fetchTaskById, updateTask} from '../../features/tasks/taskOperations';
import {StyledButton, StyledForm, StyledFormControl, StyledTextField} from './TaskForm.styled';
import {format, parseISO, startOfToday} from 'date-fns';

const TaskValidationSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    description: Yup.string(),
    priority: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
    dueDate: Yup.date().nullable()
});

const formatDate = (dateString) => {
    const date = dateString ? parseISO(dateString) : startOfToday();
    return format(date, 'yyyy-MM-dd');
};

const TaskForm = () => {
    const {taskId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const task = useSelector(state => state.tasks.currentTask);

    useEffect(() => {
        if (taskId && !task) {
            dispatch(fetchTaskById(taskId));
        }
    }, [taskId, task, dispatch]);


    return (
        <Formik
            initialValues={{
                title: task ? task.title : '',
                description: task ? task.description : '',
                priority: task ? task.priority : 'medium',
                status: task ? task.status : 'pending',
                dueDate: task ? formatDate(task.dueDate) : formatDate()
                // dueDate: task ? formattedDate : ''
            }}
            validationSchema={TaskValidationSchema}
            enableReinitialize={true}
            onSubmit={(values, {setSubmitting}) => {
                const action = taskId ? updateTask({id: taskId, taskData: values}) : createTask(values);
                dispatch(action).then(() => {
                    setSubmitting(false);
                    navigate('/tasks');
                });
            }}
        >
            {formik => (
                <StyledForm>
                    <StyledTextField
                        name="title"
                        label="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    />
                    <StyledTextField
                        name="description"
                        label="Description"
                        multiline
                        rows={4}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                    />
                    <StyledFormControl>
                        <Field component={FormikSelect} name="priority" label="Priority">
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </Field>
                    </StyledFormControl>
                    <StyledFormControl>
                        <Field component={FormikSelect} name="status" label="Status">
                            <MenuItem value="pending">Pending</MenuItem>
                            <MenuItem value="in progress">In Progress</MenuItem>
                            <MenuItem value="completed">Completed</MenuItem>
                        </Field>
                    </StyledFormControl>
                    <StyledTextField
                        name="dueDate"
                        label="Due Date"
                        type="date"
                        value={formik.values.dueDate}
                        onChange={formik.handleChange}
                    />
                    <StyledButton type="submit" color="primary" variant="contained" disabled={formik.isSubmitting}>
                        {taskId ? 'Update' : 'Create'}
                    </StyledButton>
                    <StyledButton onClick={() => navigate('/tasks')} color="secondary" variant="outlined">
                        Back to Tasks
                    </StyledButton>
                </StyledForm>
            )}
        </Formik>
    );
};

export default TaskForm;

