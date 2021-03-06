import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButton>GO TO CHECK OUT</CustomButton>
        </div>
    </div>
);

export default CartDropdown;
