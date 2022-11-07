import cx from 'classnames'

import GithubLogo from './assets/github-logo.png'

import './Footer.scss'

const Footer = ({ className }) => {
  return (
    <div className={cx('Footer', className)}>
      <a
        className="Link Footer-Layout"
        href="https://bit.ly/holymarket"
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          className="Footer-GithubLogo"
          src={GithubLogo}
          alt="Репозиторий на Гитхабе:"
        />
        bit.ly/holymarket
      </a>
    </div>
  )
}

export default Footer
