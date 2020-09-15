import React from 'react';

const UserList = ({ users }) => (
  <ul>
    {users.length > 0 && <li className="list-item"><h3>User List</h3></li>}
    {users.map((user, index) => (
      <li className="list-item" key={index}>
        <p><strong>Name: </strong>{user.name}</p>
        { user.phone !== '' && <p><strong>Phone: </strong>{user.phone}</p> }
        { user.email !== '' && <p><strong>Email: </strong>{user.email}</p> }
      </li>
    ))}
  </ul>
);

export default UserList;