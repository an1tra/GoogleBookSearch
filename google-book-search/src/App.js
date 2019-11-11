import React from 'react';
import { Table, Button } from 'reactstrap';


function App() {
  return (
    <div className="App container">
      <Table>
        <thead>
          <tr>
            <th>ID#</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Book One</td>
            <td>4.5</td>
            <td>
              <Button color="success" size="sm">Edit</Button>
              <Button color="danger" size="sm">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
