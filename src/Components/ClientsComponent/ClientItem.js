import React from 'react'
import { Row, Wrapper, Table, DeleteBtn } from '../../Helpers/Styles/ClientsComponent/ClientItem'
export const ClientItem = () => {
    return (
        <Wrapper>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th> <th>Surname</th> <th>Email</th>  <th>Street</th>   <th>Zip Code</th>   <th>City</th><th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nowak</td> <td>Kowalski</td>  <td>john@mail.com</td>   <td>Avenu</td>    <td>02114</td>  <td>New York</td>  <td>
                            <DeleteBtn className="fa fa-trash" aria-hidden="true"></DeleteBtn>
                        </td>
                    </tr>
                    <tr>
                        <td>Nowak</td> <td>Kowalski</td>  <td>john@mail.com</td>   <td>Avenu</td>    <td>02114</td>  <td>New York</td>   <td>
                            <DeleteBtn className="fa fa-trash" aria-hidden="true"></DeleteBtn>
                        </td>
                    </tr>
                    <tr>
                        <td>Nowak</td> <td>Kowalski</td>  <td>john@mail.com</td>   <td>Avenu</td>    <td>02114</td>  <td>New York</td>  <td>
                            <DeleteBtn className="fa fa-trash" aria-hidden="true"></DeleteBtn>
                        </td>
                    </tr>
                    <tr>
                        <td>Nowak</td> <td>Kowalski</td>  <td>john@mail.com</td>   <td>Avenu</td>    <td>02114</td>  <td>New York</td>  <td>
                            <DeleteBtn className="fa fa-trash" aria-hidden="true"></DeleteBtn>
                        </td>
                    </tr>
                    <tr>
                        <td>Nowak</td> <td>Kowalski</td>  <td>john@mail.com</td>   <td>Avenu</td>    <td>02114</td>  <td>New York</td>  <td>
                            <DeleteBtn className="fa fa-trash" aria-hidden="true"></DeleteBtn>
                        </td>
                    </tr>

                </tbody>
            </Table>



        </Wrapper>
    )
}