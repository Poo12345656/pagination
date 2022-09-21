import React from "react";
import "./Table.css"


function Table({ column, row }) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        {
                            column.map((col,index)=>{
                                return <th key={`table-head-${index}`}>{col}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        row.map((row,index)=>{
                            return <tr key={`table-row-${index}`}>
                                {
                                    row.map((col,index)=>{
                                        return <td key={`table-col-${index}`}>{col}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className="error">
            {
                row.length === 0 ? <p>No Data Found </p> : (null)
            }
            </div>
            
        </div>
    );
}

export default Table;
