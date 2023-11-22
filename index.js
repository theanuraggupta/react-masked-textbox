import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { useEffect } from "react";

import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';

const Default = () => {
    return (<div className='control-pane'>
            <div className='control-section'>
                <div className="content-wrapper sample-mask">
                    <div className="control-label">Mobile Number</div>
                    <MaskedTextBoxComponent mask='000-000-0000'></MaskedTextBoxComponent>
                    <div className="control-label">Country ISO Code</div>
                    <MaskedTextBoxComponent mask='>LL / LLL'></MaskedTextBoxComponent>
                    <div className="control-label">D.O.B</div>
                    <MaskedTextBoxComponent mask='00/00/0000'></MaskedTextBoxComponent>
                    <div className="control-label">Product Key</div>
                    <MaskedTextBoxComponent mask='>AAAAA-AAAAA-AAAAA-AAAAA'></MaskedTextBoxComponent>
                </div>
            </div>
        </div>);
};
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);