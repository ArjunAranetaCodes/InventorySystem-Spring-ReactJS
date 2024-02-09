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
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Add = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/inventory')
      .then((response) => setItems(response.data))
      .catch((error) => console.error('Error fetching inventory:', error))
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>All Items</strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Item Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {items.map((item) => (
                  <CTableRow key={item.itemName}>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>{item.itemName}</CTableDataCell>
                    <CTableDataCell>{item.quantity}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Add
