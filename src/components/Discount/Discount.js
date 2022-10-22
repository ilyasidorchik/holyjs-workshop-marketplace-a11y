import cx from "classnames";

import "./Discount.scss";

const Discount = ({ className, percent }) => (
  <div className={cx("Discount", className)}>–{percent}%</div>
);

export default Discount;
