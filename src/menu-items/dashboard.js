// assets
import { DashboardOutlined, 
  SettingOutlined,
   CarOutlined,
    ShoppingOutlined, 
    TagOutlined ,
    ThunderboltOutlined,
    WalletOutlined,
    StarOutlined,
    CreditCardOutlined,
    FormatPainterOutlined,
    FileSearchOutlined,
    GiftOutlined
  
  } from '@ant-design/icons';
{/* <SettingOutlined /> */}


// icons
const icons = {
  DashboardOutlined,
  SettingOutlined,
  CarOutlined,
  ShoppingOutlined,
  TagOutlined,
  ThunderboltOutlined,
  WalletOutlined,
  StarOutlined,
  FormatPainterOutlined,
  FileSearchOutlined,
  GiftOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'overview',
      title: 'Overview',
      type: 'item',
      url: '/sample-page',
      icon: icons.FileSearchOutlined,
      breadcrumbs: false
    },
    {
      id: 'orders',
      title: 'Orders',
      type: 'item',
      url: '/sample-page',
      icon: icons.CarOutlined,
      breadcrumbs: false
    },
    {
      id: 'abandonedcheckouts',
      title: 'Abandoned Checkouts',
      type: 'item',
      url: '/sample-page',
      icon: icons.ShoppingOutlined,
      breadcrumbs: false
    },
    {
      id: 'discount',
      title: 'Discounts',
      type: 'item',
      url: '/sample-page',
      icon: icons.TagOutlined,
      breadcrumbs: false
    },
    {
      id: 'automations',
      title: 'Automations',
      type: 'item',
      url: '/sample-page',
      icon: icons.ThunderboltOutlined,
      breadcrumbs: false
    },
    {
      id: 'paymentoffer',
      title: 'Payment Offers',
      type: 'item',
      url: '/sample-page',
      icon: icons.GiftOutlined,
      breadcrumbs: false
    },
    {
      id: 'rewards',
      title: 'Rewards',
      type: 'item',
      url: '/sample-page',
      icon: icons.StarOutlined,
      breadcrumbs: false
    },
    {
      id: 'shipping',
      title: 'Shipping',
      type: 'item',
      url: '/sample-page',
      icon: icons.CarOutlined,
      breadcrumbs: false
    },
    {
      id: 'shippingzones',
      title: 'Shipping Zones',
      type: 'item',
      url: '/sample-page',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'rtosuites',
      title: 'RTO Suite',
      type: 'item',
      url: '/sample-page',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'customiseUI',
      title: 'Customise UI',
      type: 'item',
      url: '/sample-page',
      icon: icons.FormatPainterOutlined,
      breadcrumbs: false
    },
    {
      id: 'setting',
      title: 'Settings',
      type: 'item',
      url: '/sample-page',
      icon: icons.SettingOutlined,
      breadcrumbs: false
    },
    {
      id: 'support',
      title: 'Support',
      type: 'item',
      url: '/sample-page',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
