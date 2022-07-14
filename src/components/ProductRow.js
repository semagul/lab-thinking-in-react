import React from 'react'

export default function ProductRow(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>

                {props.prodRowProp
                .filter((prod) => 
                prod.name.toLowerCase().includes(props.searchProp.toLowerCase()))
                .map((prod) => 
                    <tr key={prod.id}>
                        <td>
                            {prod.inStock ? <p>{prod.name}</p> : <p className="red">{prod.name}</p> }
                            </td>
                        <td>{prod.price}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div >
    )
};

