import React from 'react'
import {
  MailIcon,
  RefundIcon,
  MemberIcon,
  FavoritesIcon,
  CouponIcon,
  RecordIcon,
  SettingIcon,
  ContactIcon,
} from './icons'

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
