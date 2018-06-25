import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Button, CardBody, CardTitle, Jumbotron, Modal, ModalBody, ModalFooter, ModalHeader } from '../../../../src/components';

const CreationModal = ({ history, onToggle }) => (
  <Modal size="lg" backdropClassName="modal-backdrop-create" toggle={onToggle} isOpen>
    <ModalHeader toggle={onToggle}>
       Create Demo
    </ModalHeader>
    <ModalBody>
      <Jumbotron theme="light">
        <CardBody>
          <CardTitle display="1" tag="h1">Hey Ho</CardTitle>
          <p className="lead">This is a creation modal from the app menu.</p>
        </CardBody>
      </Jumbotron>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => history.push('/welcome')}>Go to Welcome Page</Button>
      <Button onClick={onToggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
);

CreationModal.propTypes = {
  history: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default withRouter(CreationModal);
