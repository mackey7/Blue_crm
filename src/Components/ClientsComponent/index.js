import React from 'react'
import { AddClient } from './AddClient'
import { ClientsList } from './ClientsList'
export const ClientsComponent = () => {
    return (
        <div>
            < AddClient />
            <ClientsList />
        </div>
    )
}