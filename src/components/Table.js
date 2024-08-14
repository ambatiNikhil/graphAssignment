import React from "react";

const Table = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h5 className="table-heading">Stock </h5>
      <table class="table tableStyle">
        <thead>
          <tr className="headerStyle">
            <th scope="col">Month</th>
            <th scope="col">Brown Rice</th>
            <th scope="col">Bhasmathi Rice</th>
            <th scope="col">Black Rice</th>
            <th scope="col">Bomba Rice</th>
            <th scope="col">Auromatic Rice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">June</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">July</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">August</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>

      <h5 className="table-heading"> Sales </h5>
      <table class="table tableStyle">
        <thead>
          <tr className="headerStyle">
            <th scope="col">Month</th>
            <th scope="col">Brown Rice</th>
            <th scope="col">Bhasmathi Rice</th>
            <th scope="col">Black Rice</th>
            <th scope="col">Bomba Rice</th>
            <th scope="col">Auromatic Rice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">June</th>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
          </tr>
          <tr>
            <th scope="row">July</th>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
          </tr>
          <tr>
            <th scope="row">August</th>
            <td>100</td>
            <td>0</td>
            <td>80</td>
            <td>20</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
