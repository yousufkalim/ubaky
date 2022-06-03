import React from "react";

function MenuCard({ menu }) {
  return (
    <div className="menu_card">
      <div className="card_header">
        <div className="thumbnail">
          <img src={menu.image} />
        </div>
        <div className="discount">{menu.discount}</div>
        <div className="item_id">Item: {menu.item_id}</div>
      </div>
      <div className="card_footer">
        <div className="name_section">
          <h5>{menu.name}</h5>
          <h6>{menu.quantity}</h6>
        </div>
        <div className="price_section">
          <h5>{menu.price}</h5>
          <h6>{menu.offer}</h6>
        </div>
      </div>
    </div>
    // <div className="col-lg-3 menu_card">
    //   <div className="item">
    //     <div className="chicken-item-top-image">
    //       <div className="food-image-thumbnail">
    //         <img src={menu.image} />
    //       </div>
    //       <div className="discount_badge">{menu.discount}</div>
    //       <div className="item_badge">Item: {menu.item_id}</div>
    //     </div>
    //     <div className="chicken-item-bottom">
    //       <div className="chicken-item-top-content-right">
    //         <h5>{menu.price}</h5>
    //         <h6>{menu.offer}</h6>
    //       </div>
    //       <div className="chicken-item-top-content-left">
    //         <h5>{menu.name}</h5>
    //         <h6>{menu.quantity}</h6>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default MenuCard;
