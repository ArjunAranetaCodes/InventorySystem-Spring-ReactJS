import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CInputGroup,
  CInputGroupText,
  CFormCheck,
  CFormSelect,
} from '@coreui/react'
import { useState, useEffect } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import axios from 'axios'
import { cilPencil, cilPrint, cilReload, cilTrash, cilZoom } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Add = () => {
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/account')
      .then((response) => setAccounts(response.data))
      .catch((error) => console.error('Error fetching account:', error))
  }, [])

  function exportPDF() {
    const doc = new jsPDF()
    doc.autoTable({ html: '#table-items' })
    doc.save('table.pdf')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCol xs={4}>
          <CInputGroup className="mb-3">
            <CInputGroupText id="text-search-inventory">
              <CIcon icon={cilZoom} title="Search" />
            </CInputGroupText>
            <CFormInput
              placeholder="Search for Inventory"
              aria-label="text-search-inventory"
              aria-describedby="text-search-inventory"
            />
          </CInputGroup>
        </CCol>
        <CCard className="mb-4 pt-4 pl-4">
          <CRow>
            <CCol xs={1} className="text-center">
              <CFormCheck
                className="mb-4 pt-4 pl-4"
                id="flexCheckIndeterminate"
                label=""
                indeterminate
              />
            </CCol>
            <CCol xs={2}>
              <CFormSelect
                aria-label="Table Filter"
                options={[
                  'Filter Inventory',
                  { label: 'All Items', value: '1' },
                  { label: 'Recent Items', value: '2' },
                  { label: 'No Stock', value: '3', disabled: true },
                ]}
              />
            </CCol>
            <CCol xs={2}>
              <CRow>
                <CCol className="text-center g-0 m-0 p-0">
                  <CButton color="primary">
                    <CIcon icon={cilReload} title="Reload Inventory" />
                  </CButton>
                </CCol>
                <CCol className="text-center g-0 m-0 p-0">
                  <CButton color="primary">
                    <CIcon icon={cilTrash} title="Delete Selected" />
                  </CButton>
                </CCol>
                <CCol className="text-center g-0 m-0 p-0">
                  <CButton color="primary" onClick={() => exportPDF()}>
                    <CIcon icon={cilPrint} title="Print Table" />
                  </CButton>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
          <CCardHeader>
            <strong>All Accounts</strong>
          </CCardHeader>
          <CCardBody>
            <CTable id="table-items">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Permission</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {accounts.map((account) => (
                  <CTableRow key={account.username}>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>{account.username}</CTableDataCell>
                    <CTableDataCell>{account.permission}</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="info" className="mx-1">
                        <CIcon icon={cilPencil} title="Edit Item" />
                      </CButton>
                      <CButton color="danger">
                        <CIcon icon={cilTrash} title="Delete Selected" />
                      </CButton>
                    </CTableDataCell>
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
