import React from 'react'
import { Wrapper, Table, DeleteBtn } from '../../Helpers/Styles/CostsComponent/CostsList'
import { CenterRow } from '../../Helpers/Styles/Helpers/Helpers'


import { DeleteCost, FetchCosts } from "../../Actions/CostsActions";

import { useDispatch, useSelector } from 'react-redux'


export const CostsList = () => {
    const dispatch = useDispatch();
    const createDeleteCostAction = (id) => dispatch(DeleteCost(id));
    const createFetchCostAction = () => dispatch(FetchCosts());

    const costs = useSelector((state) => state.costs.costs);

    React.useEffect(() => {
        createFetchCostAction()
    });


    const deleteItem = async (e) => {
        e.preventDefault()
        let id =
            e.target.getAttribute("data-id")
        await createDeleteCostAction(id)
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