import React, { Component } from 'react'
import './DialogBox.css'
export default class DialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }
  componentDidMount() {
    if (this.state.isVisible) {
      this.show();
    }
  }
  show = () => {
    this.setState({ isVisible: true }, () => this.dialog.showModal());
  }
  hide = () => {
    this.props.onClose();
    this.setState({ isVisible: false }, () => this.dialog.close());
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.visible!== this.state.isVisible)
    this.setState({ isVisible: nextProps.visible }, () => {
      this.state.isVisible ? this.show() : this.hide()
    });

  }

  render() {
    return (
      <dialog className='dialogbox' ref={(ref) => this.dialog = ref}>
        <div className='closeBtn'>
          <i className='material-icons' onClick={() => this.hide()}>close</i>
        </div>
        {this.props.children}
      </dialog>
    )
  }
}
