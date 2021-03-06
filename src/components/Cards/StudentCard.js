import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import StudentModal from '../Modals/StudentModal'


const StudentCard = (props) => {
  let array = [
    {
      id: 1,
      name: 'Putri',
      address: 'bandung',
      username: 'put',
      password: 'put',
    },
    {
      id: 2,
      name: 'Unair',
      address: 'bandssung',
      username: 'pusssst',
      password: 'pussssst',
    },
    {
      id: 3,
      name: 'UNESA',
      address: 'baaaandung',
      username: 'putaaa',
      password: 'putaaaaaaa',
    },

    {
      id: 4,
      name: 'UNPAD',
      address: 'bandfffung',
      username: 'puffft',
      password: 'puffft',
    },
  ]
  return (
    <Table id="studentTable">
      <thead>
        <tr>
          <th colSpan="6">
            <StudentModal />
          </th>
        </tr>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Username</th>
          <th scope="col">Password</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {array.map((array) => (
          <tr>
            <td>{array.name}</td>
            <td>{array.address}</td>
            <td>{array.username}</td>
            <td>{array.password}</td>
            <td>
              <Link
                to={'/students/edit/' + array.id}
                className="align-self-center text-center "
              >
                <FontAwesomeIcon icon={faEdit} />
              </Link>
            </td>
            <td>
              <Link
                to={'/students/delete/' + array.id}
                className="align-self-center text-center "
              >
                <FontAwesomeIcon icon={faTrash} />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default StudentCard
