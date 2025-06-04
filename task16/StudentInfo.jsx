import React, { useContext } from 'react'
import { StudentContext } from './StudentContext'

const StudentInfo = () => {
    const { name, age, email } = useContext(StudentContext)
  return (
    <>
    <h2>Student Data</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      </>
  )
}

export default StudentInfo