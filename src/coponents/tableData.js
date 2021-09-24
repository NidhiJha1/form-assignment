import React from "react";
import './table.css';

const TableData = ({formData}) => {
    return(
        <>
        <div className="table-wrapper">
          <div className="text-hading">All Feedback</div>

          <table>
            <thead>
              <tr>
                <th>From Name</th>
                <th>Text Field</th>
                <th>Phone field</th>
                <th>Email Field</th>
                <th>Radio Button</th>
                <th>Name</th>
              </tr>
            </thead>
          <tbody>
          {formData.map((data,index) => (
            <tr key={index}>
                <td>Aromatic Bar</td>
                <td>{data.textField}</td>
                <td>{data.email}</td>
                <td>{data.name}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.value}</td>
            </tr>
          ))}
          </tbody>
          </table>
          </div>  
        </>
      
    );
};

export default TableData;
