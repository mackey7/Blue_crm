import React, { useState, useEffect } from 'react'
import { WrapperComponent, WrapperItem, Row } from '../../../Helpers/Styles/HomePage/tasksBox'
import { CenterRow } from '../../../Helpers/Styles/Helpers/Helpers'

import app from '../../../base'

export const TasksBox = () => {
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
        <WrapperItem >
            <Row>
                <h4>{task.title}</h4>
                <p>{task.description}</p>
            </Row>

        </WrapperItem >
    ))

    const condidtionalRender = tasks.length > 0 ? mapTasks : <CenterRow> You dont`t have tasks </CenterRow>

    return (
        <WrapperComponent>
            <h2>Tasks</h2>
            {condidtionalRender}
        </WrapperComponent>
    )
}