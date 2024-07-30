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
} from '@coreui/react'
import { useState, useEffect } from 'react'

const Add = () => {
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState('')
  const handleAddOrUpdateTodo = (e) => {
    e.preventDefault()
    console.log(itemName)
    fetch('http://localhost:8080/api/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemName: itemName,
        quantity: quantity,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Inventory added successfully', data)
      })
      .catch((error) => console.error('Error adding item:', error))
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add Inventory</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleAddOrUpdateTodo}>
              <div className="mb-3">
                <CFormLabel htmlFor="skuInput">SKU</CFormLabel>
                <CFormInput
                  type="text"
                  placeholder="SKU"
                  aria-label="sku input text"
                  id="skuInput"
                  value=""
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="itemNameInput">Item name</CFormLabel>
                <CFormInput
                  type="text"
                  placeholder="Item name"
                  aria-label="item name input text"
                  id="itemNameInput"
                  value={itemName || ''}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="itemQuantityInput">Quantity</CFormLabel>
                <CFormInput
                  type="text"
                  placeholder="Quantity"
                  aria-label="item quantity input type"
                  id="itemQuantityInput"
                  value={quantity || ''}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="itemPriceInput">Item Price</CFormLabel>
                <CFormInput
                  type="text"
                  placeholder="Item Price"
                  aria-label="item price input text"
                  id="itemPriceInput"
                  value=""
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
