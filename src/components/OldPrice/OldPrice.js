import cx from "classnames";

import Price from "components/Price";

const OldPrice = ({ className, value, currency }) => (
  <Price
    className={cx("OldPrice", className)}
    as="del"
    value={value}
    currency={currency}
  />
);

export default OldPrice;
