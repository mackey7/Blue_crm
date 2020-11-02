import React from 'react'
import { DeleteBtn } from '../../Helpers/Styles/ClientsComponent/ClientItem'
export const ClientItem = clientData => {




    return (

        <tr>
            <td>{clientData.clientData.name}</td> <td>{clientData.clientData.surname}</td>  <td>{clientData.clientData.email}</td>   <td>{clientData.clientData.street}</td>    <td>{clientData.clientData.zipCode}</td>  <td>{clientData.clientData.city}</td>  <td>
                <DeleteBtn className="fa fa-trash" aria-hidden="true"></DeleteBtn>
            </td>
        </tr>

    )
}