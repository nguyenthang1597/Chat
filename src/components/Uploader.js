import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';
import { firebaseConnect } from 'react-redux-firebase';
import Dropzone from 'react-dropzone';

const filesPath = 'uploadedFiles';

const handlers = {
  onFilesDrop: props => files => {
    files.map(file => {
      let upload = props.firebase.storage().ref(`images/${file.name}`).put(file);
      upload.on('state_changed', function(snapshot){
       
      }, function(error) {
      }, function() {
        upload.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          props.pushUrlImg(downloadURL);
          props.onClose();
        });
      });
    })
    
  }
};

const enhancerPropsTypes = {
  firebase: PropTypes.object.isRequired
};

const enhance = compose(
  firebaseConnect([{ path: filesPath }]),
  connect(({ firebase: { data } }) => ({
    uploadedFiles: data[filesPath]
  })),
  setPropTypes(enhancerPropsTypes),
  withHandlers(handlers)
);

const Uploader = ({ onFilesDrop }) => (
  <div>
    <Dropzone onDrop={onFilesDrop}>
      <div style={{ display: 'flex', width: '100%', height: '100%', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <div>Drag and drop files here or click to select</div>
      </div>
    </Dropzone>
  </div>
);

Uploader.propTypes = {
  firebase: PropTypes.object.isRequired,
  uploadedFiles: PropTypes.object
};

export default enhance(Uploader);