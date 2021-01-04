import React from 'react'
import { ReactComponent as MailIcon } from '../images/Mail.svg'
import { ReactComponent as RefundIcon } from '../images/Refund.svg'
import { ReactComponent as MemberIcon } from '../images/Member.svg'
import { ReactComponent as FavoritesIcon } from '../images/Favorites.svg'
import { ReactComponent as CouponIcon } from '../images/Coupon.svg'
import { ReactComponent as RecordIcon } from '../images/Record.svg'
import { ReactComponent as SettingIcon } from '../images/Setting.svg'
import { ReactComponent as ContactIcon } from '../images/Contact.svg'

export const MemberSidebarData = [
  {
    title: '我的信箱',
    icon: <MailIcon />,
    link: '/mail',
  },
  {
    title: '退款申請',
    icon: <RefundIcon />,
    link: '/refund',
  },
  {
    title: '會員專區',
    icon: <MemberIcon />,
    link: '/member',
  },
  {
    title: '蒐藏清單',
    icon: <FavoritesIcon />,
    link: '/favorites',
  },
  {
    title: '優惠券　',
    icon: <CouponIcon />,
    link: '/coupon',
  },
  {
    title: '交易紀錄',
    icon: <RecordIcon />,
    link: '/record',
  },
  {
    title: '帳號設定',
    icon: <SettingIcon />,
    link: '/setting',
  },
  {
    title: '聯絡我們',
    icon: <ContactIcon />,
    link: '/contact',
  },
]
