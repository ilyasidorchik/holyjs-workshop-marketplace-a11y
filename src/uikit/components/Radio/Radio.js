import cx from "classnames"

import "./Radio.scss"

const Radio = ({
  className,
  name,
  value,
  text,
  defaultChecked,
  onChange,
}) => {
  return (
    <label className={cx("Radio", className)}>
      <input
        className="Radio-Input"
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <div className="Radio-Row">
        <div className="Radio-FakeInput" />
        <div>{text}</div>
      </div>
    </label>
  )
}

export default Radio
