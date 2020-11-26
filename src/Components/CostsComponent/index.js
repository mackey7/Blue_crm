import React from 'react'
import { AddCostComponent } from './AddCost'
import { CostsList } from './CostsList'

export const CostsComponent = () => {
    return (
        <div>
            <AddCostComponent />

            <CostsList />
        </div>
    )
}