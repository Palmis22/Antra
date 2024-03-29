import React from 'react';
import Table from 'react-bootstrap/Table';



const TableForTasks = (props) => {
    // console.log(props.tasks)
  return (
    <Table className=''>
        <thead>
            <tr className=''>
                <th>eil. Nr.</th>
                <th>uzduotis</th>
                <th>ar uzbaigta</th>
            </tr>
        </thead>

        <tbody>
        {
            props.tasks.map((task, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.text}</td>
                    <td>{task.isCompleted ? 'atlikta' : 'neatikta'}</td>
                </tr>
            ))
        }
        </tbody>
        
    </Table>
  )
}

export default TableForTasks