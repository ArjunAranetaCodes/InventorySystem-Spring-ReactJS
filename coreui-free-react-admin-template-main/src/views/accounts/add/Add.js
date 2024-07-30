import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CFormSelect,
} from '@coreui/react'
import { useState, useEffect } from 'react'

const Add = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [permission, setPermission] = useState('')
  const handleAddOrUpdateAccount = (e) => {
    e.preventDefault()
    console.log(username)
    fetch('http://localhost:8080/api/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        permission: permission,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Account added successfully', data)
      })
      .catch((error) => console.error('Error adding item:', error))
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add User</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleAddOrUpdateAccount}>
              <div className="mb-3">
                <CFormLabel htmlFor="usernameInput">Username</CFormLabel>
                <CFormInput
                  type="text"
                  placeholder="Username"
                  aria-label="username input text"
                  id="usernameInput"
                  value={username || ''}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="passwordInput">Password</CFormLabel>
                <CFormInput
                  type="password"
                  placeholder="Password"
                  aria-label="password input text"
                  id="passwordInput"
                  value={password || ''}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="permissionLevelSelect">Permission Level</CFormLabel>
                <CFormSelect
                  aria-label="Permission Level"
                  options={[
                    'Permission Level',
                    { label: 'Admin', value: 'Admin' },
                    { label: 'User', value: 'User' },
                  ]}
                  onChange={(e) => setPermission(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <CButton type="submit" className="mb-3">
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Add
