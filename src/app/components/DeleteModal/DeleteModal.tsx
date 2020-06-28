import React from 'react';
import { Dialog } from 'primereact/dialog';

import { AMContactService } from './contact';

interface ISTATE {
    modalType: string;
    itemName: string;
    isDisplay: boolean;
    tKeyHeader: string;
    tKeyDescription: string
}

export class ApprovalModal extends React.Component<any, ISTATE>{
    state: ISTATE = {
        modalType: '',
        itemName: '',
        isDisplay: false,
        tKeyHeader: '',
        tKeyDescription: ''
    }

    constructor(props: any) {
        super(props);
        AMContactService
            .eventShowModal
            .subscribe(item => {
                if (!item)
                    return;

                this.onDisplay(item.modalType, item.itemName, item.tKeyHeader, item.tKeyDescription)
            })
    }

    onDisplay = (modalType: string, itemName: string, tKeyHeader: string, tKeyDescription: string) => this.setState({ isDisplay: true, modalType, itemName, tKeyHeader, tKeyDescription });
    onHidden = () => this.setState({ isDisplay: false, itemName: '' });

    onCancel = () => {
        AMContactService.callbackCancel();
        this.onHidden();
    }

    onApply = () => {
        AMContactService.callbackApply();
        this.onHidden();
    }

    footerTemplate = (
        <div>
            <button onClick={this.onApply} className="btn btn-sm btn-outline-primary">
                <i className="fa fa-check mr-3"></i>
                OK
            </button>
            <button onClick={this.onCancel} className="btn btn-sm btn-outline-danger">
                <i className="fa fa-close mr-3"></i>
                CANCEL
            </button>
        </div>
    )

    render() {
        return (
            <React.Fragment>
                <Dialog header="asdasd" visible={this.state.isDisplay} style={{ width: '50vw' }} footer={this.footerTemplate} onHide={this.onCancel} maximizable>
                    <div className="w-100 d-flex flex-column p-1">
                        <div className="w-100 mb-3 text-dark">
                            <h5>
                                asdasd
                            </h5>
                        </div>

                        <div className="w-100 mb-3 text-danger">
                            {
                                this.state.itemName
                            }
                        </div>
                    </div>
                </Dialog>
            </React.Fragment>
        )
    }
}