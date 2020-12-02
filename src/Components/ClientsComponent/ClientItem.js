import React from 'react'
import { DeleteBtn } from '../../Helpers/Styles/ClientsComponent/ClientItem'
import { DeleteClient, FetchClients } from '../../Actions/ClientsActions'
import { useDispatch } from 'react-redux'

export const ClientItem = clientData => {
    const dispatch = useDispatch();
    const createDeleteClientAction = (id) => dispatch(DeleteClient(id));

    async function deleteItem(e) {
        e.preventDefault()
        let id =
            e.target.getAttribute("data-id")
        console.log(createDeleteClientAction(id))
        await createDeleteClientAction(id)
        await dispatch(FetchClients());

    }
    return (

        <tr>
            <td>{clientData.clientData.name}</td> <td>{clientData.clientData.surname}</td>  <td>{clientData.clientData.email}</td>   <td>{clientData.clientData.street}</td>    <td>{clientData.clientData.zipCode}</td>  <td>{clientData.clientData.city}</td>  <td>
                <DeleteBtn onClick={e => deleteItem(e)} data-id={clientData.clientData.id} className="fa fa-trash" aria-hidden="true"></DeleteBtn>
            </td>
        </tr>

    )
}