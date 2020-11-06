import React from 'react'
import { Wrapper, Table } from '../../Helpers/Styles/ClientsComponent/ClientsList'
import { CenterRow } from '../../Helpers/Styles/Helpers/Helpers'
import { ClientItem } from './ClientItem'
import app from '../../base'


export const ClientsList = () => {
    const [clients, setClient] = React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();
            const data = await db.collection("clients").get();
            setClient(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
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