import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default', false, LEVELS.NORMAL);
    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }
    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            <TaskComponent task = {defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
