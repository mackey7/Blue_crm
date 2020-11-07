import React, { useEffect } from 'react'
import { Wrapper, Table } from '../../../Helpers/Styles/HomePage/costBox'
import { CenterRow } from '../../../Helpers/Styles/Helpers/Helpers'
import app from '../../../base'
export const CostBox = () => {

    const [costs, setCost] = React.useState([])
    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();
            const data = await db.collection("costs").get();
            setCost(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);




    const mapCost = costs.map(cost => (
        <tr>
            <td >{cost.name}</td> <td>{cost.category}</td>  <td>{cost.Amount}</td>

        </tr>
    ))
    const renderCondidtion = costs.length > 0 ? mapCost : <CenterRow> no costs </CenterRow>

    return (
        <Wrapper>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th> <th>category</th> <th>Amount</th>
                    </tr>
                </thead>
                <tbody>

                    {renderCondidtion}
                </tbody>
            </Table>



        </Wrapper>
    )

}