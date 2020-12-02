import React from 'react'
import { Wrapper, Table } from '../../Helpers/Styles/ClientsComponent/ClientsList'
import { CenterRow } from '../../Helpers/Styles/Helpers/Helpers'
import { ClientItem } from './ClientItem'
import { useDispatch, useSelector } from 'react-redux'
import { FetchClients } from '../../Actions/ClientsActions'


export const ClientsList = () => {
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.clients.clients);

    React.useEffect(() => {
        async function fetchData() {
            await dispatch(FetchClients());
        }
        fetchData()
    }, []);

    const clientsMap = clients.map(client => (
        <p><ClientItem key={client.id} clientData={client} /></p>
    ))

    const conditionalRender = clients.length > 0 ? clientsMap : <CenterRow> You don`t have a client </CenterRow>

    return (
        <Wrapper>
            <Wrapper>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th> <th>Surname</th> <th>Email</th>  <th>Street</th>   <th>Zip Code</th>   <th>City</th><th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conditionalRender}
                    </tbody>
                </Table>
            </Wrapper>
        </Wrapper>
    )
}