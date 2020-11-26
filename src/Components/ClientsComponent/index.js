import React from 'react'
import { AddClientComponent } from './AddClient'
import { ClientsList } from './ClientsList'
export const ClientsComponent = () => {
    return (
        <div>
            < AddClientComponent />
            <ClientsList />
        </div>
    )
}