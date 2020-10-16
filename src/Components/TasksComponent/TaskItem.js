import React from 'react'

export const TaskItem = () => {
    return (
        <article>

            <input type="checkbox" name="task" value="task" />


            <div>
                <h4>Tytuł taska</h4>
                <p>Opis taska</p>
            </div>
        </article>
    )
}