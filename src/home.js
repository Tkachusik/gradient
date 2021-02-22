import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetStatus, deleteGradient } from './actions';
import Item from './item';

const Home = ({ items, resetStatus, deleteGradient }) => {
    resetStatus();
    return (
        <div className="container-fluid">
            <div className="row grid add-new-btn">
                <Link to="/new" className="btn btn-success">Add gradient</Link>
            </div>
            {items.map((item, id) => (
                <div className="row grid" key={id}>
                    <Item id={id} item={item} deleteGradient={deleteGradient} />
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
}

const mapDispatchToProps = {
    resetStatus,
    deleteGradient,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);