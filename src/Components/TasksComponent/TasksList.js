import React, { useEffect } from 'react'
import { TaskItem } from './TaskItem'
import { Wrapper } from '../../Helpers/Styles/TasksComponent/TasksList'
import { CenterRow } from '../../Helpers/Styles/Helpers/Helpers'
import { useDispatch, useSelector } from 'react-redux'
import { FetchTasks } from "../../Actions/TasksActions";


export const TasksList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(FetchTasks());
        };
        fetchData();
    }, []);

    const mapTasks = tasks.map(task => (
        <TaskItem key={task.id} taskstData={task} />
    ))

    const condidtionalRender = tasks.length > 0 ? mapTasks : <CenterRow> no tasks </CenterRow>

    return (
        <Wrapper>
            {condidtionalRender}
        </Wrapper>
    )
}