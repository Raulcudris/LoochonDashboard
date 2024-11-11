import { paths } from '@/config/paths';
import type { NavItemConfig } from '@/types/nav';

export const navItems = [
  {
    key: 'overview',
    title: 'Overview',
    href: paths.dashboard.overview,
    icon: 'chart-pie'
  },
  {
    key: 'users',
    title: 'Users',
    href: paths.dashboard.users,
    icon: 'users'
  }
  ,
  {
     key: 'integrations',
     title: 'Integrations',
     href: paths.dashboard.integrations,
     icon: 'plugs-connected'
  },
  {
    key: 'settings',
    title: 'Settings',
    href: paths.dashboard.settings,
    icon: 'gear-six'
  },
  {
    key: 'account',
    title: 'Account',
    href: paths.dashboard.account,
    icon: 'user'
  },
  {
     key: 'error',
     title: 'Error',
     href: paths.errors.notFound,
     icon: 'x-square'
  },
] satisfies NavItemConfig[];
