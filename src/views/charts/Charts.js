/* eslint-disable */ // Disabled due to [Reason: e.g. specific library quirks, temporary development, etc.]. Always reconsider before using this in production.

import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CButton,
  CFormLabel,
  CFormTextarea,
  CRow,
  CCol
} from '@coreui/react';

const Contact = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Contactez-nous</CCardHeader>
        <CCardBody>
          <h4>Informations</h4>
          <p>Adresse: 123 rue de la Paix, Ville, Code postal</p>
          <p>Téléphone: +123456789</p>
          <p>Email: contact@example.com</p>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader>Envoyez un message</CCardHeader>
        <CCardBody>
          <CForm>
            <CRow>
              <CCol md={6}>
                <CFormLabel htmlFor="name">Nom</CFormLabel>
                  <CFormInput
                    type="text"
                    id="name"
                    placeholder="Entrez votre nom"
                    aria-label="Entrez votre nom"
                  />

              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="email">Email</CFormLabel>
                <CFormInput
                  type="email"
                  id="email"
                  placeholder="Entrez votre email"
                  aria-label="Entrez votre email"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol md={12}>
                <CFormLabel htmlFor="subject">Sujet</CFormLabel>
                <CFormInput
                  type="text"
                  id="subject"
                  placeholder="Sujet du message"
                  aria-label="Sujet du message"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol md={12}>
                <CFormLabel htmlFor="message">Message</CFormLabel>
                <CFormTextarea
                  id="message"
                  rows="9"
                  placeholder="Votre message..."
                  aria-label="Votre message"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol md={12}>
                <CButton type="submit" color="primary">Envoyer</CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>

      {/* Optionally add a map component or any other component here if necessary. */}

    </>
  );
}

export default Contact;
