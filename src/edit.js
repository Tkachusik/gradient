import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clickEdit} from './actions';
import { isValidHex } from "./utils";
import { Redirect } from 'react-router-dom';

const Edit = ({ items, clickEdit, redirectToHome }) => {
    const { id } = useParams();

    const [colorLeft, setColorLeft] = useState(items[id].colorLeft);
    const [colorRight, setColorRight] = useState(items[id].colorRight);
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
                            <button disabled={valid ? false : true} className="btn btn-light distance" onClick={() => clickEdit(id, {colorLeft, colorRight})}>Add gradient</button>
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
        items: state.items,
        redirectToHome: state.redirectToHome,
    }
}

const mapDispatchToProps = {
    clickEdit,
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);