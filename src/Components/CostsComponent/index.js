import React from 'react'
import { AddCost } from './AddCost'
import { CostsList } from './CostsList'

export const CostsComponent = () => {
    return (
        <div>
            <AddCost />

            <CostsList />
        </div>
    )
}