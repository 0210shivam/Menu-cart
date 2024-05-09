import React from 'react';

const Sample = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                    <div style={{ border: '1px solid red', padding: '30px' }} className="box">number</div>
                </div>
                <div className="col-md-6">
                    <div style={{ border: '1px solid red', padding: '30px' }} className="box">number</div>
                </div>
                <div className="col">
                    <div style={{ border: '1px solid red', padding: '30px' }} className="box">number</div>
                </div>
            </div>
            <div className="row">
                <div className="col offset-md-3">
                    <div style={{ border: '1px solid red', padding: '30px' }} className="box">number</div>
                </div>
            </div>
        </div>
    );
};

export default Sample;
