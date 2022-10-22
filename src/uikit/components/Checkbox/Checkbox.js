import cx from "classnames"

import "./Checkbox.scss"

const Checkbox = ({
  className,
  name,
  value,
  text,
  defaultChecked,
  onChange,
}) => {
  return (
    <label className={cx("Checkbox", className)}>
      <input
        className="Checkbox-Input"
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <div className="Checkbox-Row">
        <div className="Checkbox-FakeInput" />
        <div>{text}</div>
      </div>
    </label>
  )
}

export default Checkbox
