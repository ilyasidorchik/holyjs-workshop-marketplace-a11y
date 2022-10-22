import cx from 'classnames'

import { Image } from 'uikit/components'

import GithubLogo from './assets/github-logo.png'

import './Footer.scss'

const Footer = ({ className }) => {
  return (
    <div className={cx('Footer', className)}>
      <a
        className="Link Footer-Layout"
        href="https://bit.ly/holymarket"
      >
        <Image
          className="Footer-GithubLogo"
          src={GithubLogo}
        />
        bit.ly/holymarket
      </a>
    </div>
  )
}

export default Footer
