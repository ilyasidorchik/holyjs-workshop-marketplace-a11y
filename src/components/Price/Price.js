import cx from "classnames";

const Currency = {
  RUR: "₽",
  USD: "$",
};

const Price = ({
  className,
  as: Component = 'div',
  value,
  currency,
}) => (
  <Component className={cx("Price", className)}>
    {value} {Currency[currency]}
  </Component>
);

export default Price;
