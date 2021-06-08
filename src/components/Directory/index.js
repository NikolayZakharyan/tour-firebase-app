import React from 'react';
import ShopMen from '../../assets/shopMens.jpeg';
import ShopWomen from '../../assets/shopWomens.jpg';
import './styles.scss';

function Directory() {
  return (
    <div className="directory">
          <div className="wrap">
              
        <div style={{ backgroundImage: `url(${ShopWomen})` }} className="item">
          <a>Show Womens</a>
        </div>
        <div style={{ backgroundImage: `url(${ShopMen})` }} className="item">
          <a>Show Mens</a>
        </div>
      </div>
    </div>
  );
}

export default Directory;
