import React from 'react'
import { Wrapper, Table, DeleteBtn } from '../../Helpers/Styles/CostsComponent/CostsList'
export const CostsList = () => {
    return (
        <Wrapper>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th> <th>category</th> <th>Amount</th>  <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>gasoline</td> <td>Car</td>  <td>30</td> <td> <DeleteBtn className="fa fa-trash" aria-hidden="true"></DeleteBtn></td>

                    </tr>
                    <tr>
                        <td>gasoline</td> <td>Car</td>  <td>30</td> <td> <DeleteBtn className="fa fa-trash" aria-hidden="true"></DeleteBtn></td>

                    </tr>
                    <tr>
                        <td>gasoline</td> <td>Car</td>  <td>30</td> <td> <DeleteBtn className="fa fa-trash" aria-hidden="true"></DeleteBtn></td>

                    </tr>
                    <tr>
                        <td>gasoline</td> <td>Car</td>  <td>30</td> <td> <DeleteBtn className="fa fa-trash" aria-hidden="true"></DeleteBtn></td>

                    </tr>


                </tbody>
            </Table>



        </Wrapper>
    )
}