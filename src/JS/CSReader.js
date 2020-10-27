import React, { Component } from 'react'
import { CSVReader } from 'react-papaparse'

export default class CSReader extends Component {
  handleOnDrop = (data) => {
    console.log(data.type)
  }
 
  handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  handleOnRemoveFile = (data) => {
    console.log(data);  
    console.log('---------------------------')
  }
 
  render() {
    return (
      <>
      <CSVReader
        onDrop={this.handleOnDrop}
        onError={this.handleOnError}
        noDrag
        addRemoveButton
        onRemoveFile={this.handleOnRemoveFile}
      >
        <span>Click to upload.</span>
      </CSVReader>
      </>
    )
  }
}