import React from 'react';
import { Modal } from 'antd';

export default class PatacModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visiable: false };
        
    }

    showModal = () => {
        this.setState({
            visiable: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visiable: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visiable: false,
        });
    };

    render() {
        return <Modal
                visiable={this.state.visiable}
            >
                ...
            </Modal>
    }
}