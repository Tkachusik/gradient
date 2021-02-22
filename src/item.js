import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ deleteGradient, item, id }) => {
    return (
        <div className="item">
            <Link to={`/edit/${id}`}>
                <div style={{ background: `linear-gradient(90deg, ${item.colorLeft} 0%, ${item.colorRight} 100%)`, height: "50px" }} key={id}>
                    <span className="text-left">{item.colorLeft}</span>
                    <span className="text-right">{item.colorRight}
                    </span>
                </div>
            </Link>
            <div className="delete-btn" onClick={() => deleteGradient(id)}>
                <span>X</span>
            </div>
        </div>
    )
}

export default Item;