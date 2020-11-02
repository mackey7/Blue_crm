import React from 'react'

import { Wrapper, Table } from '../../Helpers/Styles/ClientsComponent/ClientsList'
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

                        {clients.map(client => (
                            <p><ClientItem key={client.id} clientData={client} /></p>
                        ))}


                    </tbody>
                </Table>



            </Wrapper>
        </Wrapper>
    )
}