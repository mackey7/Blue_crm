import React, { useEffect } from 'react'
import { TaskItem } from './TaskItem'
import { Wrapper } from '../../Helpers/Styles/TasksComponent/TasksList'
import app from '../../base'




export const TasksList = () => {
    const [tasks, setTask] = React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();
            const data = await db.collection("tasks").get();
            setTask(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);


    return (
        <Wrapper>
            {tasks.map(task => (
                <TaskItem key={task.id} taskstData={task} />
            ))}


        </Wrapper>
    )
}