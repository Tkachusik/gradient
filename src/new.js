import React, { useState } from 'react';
import { connect } from 'react-redux';
import { clickAdd } from './actions';
import { Redirect } from 'react-router-dom';
import { isValidHex } from "./utils";

const New = ({ clickAdd, redirectToHome }) => {
    const [colorLeft, setColorLeft] = useState("");
    const [colorRight, setColorRight] = useState("");
    const valid = isValidHex(colorLeft) && isValidHex(colorRight);

    if (redirectToHome === true) {
        return (<Redirect exact to="/" />)
    }
    return (
        <div className="container-fluid h-100">
            <div className="row align-items-center new-gradient h-100">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <input className="form-control" onChange={(event) => setColorLeft(event.target.value)} value={colorLeft} type="text" />
                        </div>
                        <div className="col-6">
                            <input className="form-control" onChange={(event) => setColorRight(event.target.value)} value={colorRight} type="text" />
                        </div>
                        <div className="d-grid gap-2 place">
                            <button disabled={valid ? false : true} className="btn btn-light distance" onClick={() => clickAdd({colorLeft, colorRight})}>Add gradient</button>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        redirectToHome: state.redirectToHome,
    }
}

const mapDispatchToProps = {
    clickAdd,
}
export default connect(mapStateToProps, mapDispatchToProps)(New);