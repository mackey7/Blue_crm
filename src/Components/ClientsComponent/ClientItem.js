import React from 'react'
import { DeleteBtn } from '../../Helpers/Styles/ClientsComponent/ClientItem'
import app from '../../base'

export const ClientItem = clientData => {
    function deleteItem(e) {
        app.firestore()
            .collection('clients')
            .doc(e.target.getAttribute("data-id"))
            .delete()
    }
    return (

        <tr>
            <td>{clientData.clientData.name}</td> <td>{clientData.clientData.surname}</td>  <td>{clientData.clientData.email}</td>   <td>{clientData.clientData.street}</td>    <td>{clientData.clientData.zipCode}</td>  <td>{clientData.clientData.city}</td>  <td>
                <DeleteBtn onClick={e => deleteItem(e)} data-id={clientData.clientData.id} className="fa fa-trash" aria-hidden="true"></DeleteBtn>
            </td>
        </tr>

    )
}