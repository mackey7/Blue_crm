import React, { useState, useEffect } from 'react'
import { TaskItem } from './TaskItem'
import { Wrapper } from '../../Helpers/Styles/TasksComponent/TasksList'
import { CenterRow } from '../../Helpers/Styles/Helpers/Helpers'
import app from '../../base'




export const TasksList = () => {
    const [tasks, setTask] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();
            const data = await db.collection("tasks").get();
            setTask(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
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