import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">e-mail:</span>{" "}
        <a href="mailto:steve@mail.com">martinezalejandro.dev@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">llamame</span>{" "}
        <a href="Tel: +216 21 184 010">+54 911 3851 6352</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
