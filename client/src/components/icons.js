import styled from 'styled-components'
// MemberSidebar
import { ReactComponent as MailIcon } from '../images/Mail.svg'
import { ReactComponent as RefundIcon } from '../images/Refund.svg'
import { ReactComponent as MemberIcon } from '../images/Member.svg'
import { ReactComponent as FavoritesIcon } from '../images/Favorites.svg'
import { ReactComponent as CouponIcon } from '../images/Coupon.svg'
import { ReactComponent as RecordIcon } from '../images/Record.svg'
import { ReactComponent as SettingIcon } from '../images/Setting.svg'
import { ReactComponent as ContactIcon } from '../images/Contact.svg'
// MainMail
import logo from '../images/Logo.png'
import no from '../images/No.svg'

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 60px;
  height: 60px;
`

const No = styled.img.attrs({
  src: `${no}`,
})`
  width: 20px;
  height: 20px;
`

export {
  Logo,
  No,
  MailIcon,
  RefundIcon,
  MemberIcon,
  FavoritesIcon,
  CouponIcon,
  RecordIcon,
  SettingIcon,
  ContactIcon,
}
