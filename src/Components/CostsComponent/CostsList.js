import React from 'react'
import { Wrapper, Table, DeleteBtn } from '../../Helpers/Styles/CostsComponent/CostsList'
import { CenterRow } from '../../Helpers/Styles/Helpers/Helpers'
import app from '../../base'


export const CostsList = () => {
    const [costs, setCost] = React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();
            const data = await db.collection("costs").get();
            setCost(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);

    function deleteItem(e) {
        app.firestore()
            .collection('costs')
            .doc(e.target.getAttribute("data-id"))
            .delete()

    }


    const mapCost = costs.map(cost => (
        <tr>
            <td >{cost.name}</td> <td>{cost.category}</td>  <td>{cost.Amount}</td> <td> <DeleteBtn onClick={e => deleteItem(e)} data-id={cost.id} className="fa fa-trash" aria-hidden="true"></DeleteBtn></td>

        </tr>
    ))
    const renderCondidtion = costs.length > 0 ? mapCost : <CenterRow> no costs </CenterRow>

    return (
        <Wrapper>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th> <th>category</th> <th>Amount</th>  <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {renderCondidtion}
                </tbody>
            </Table>



        </Wrapper>
    )
}