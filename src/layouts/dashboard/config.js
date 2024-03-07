import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title_ka: 'მთავარი',
    title_eng: "Main",
    path: '/dashboard',
    icon: (
      <SvgIcon fontSize="small" style={{color: 'white'}}>
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title_ka: 'გამოქვეყნებული სიახლეები',
    title_eng: "Published News",
    path: '/dashboard/published-news',
    icon: (
      <SvgIcon fontSize="small" style={{color: 'white'}}>
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title_ka: 'გამომწერები',
    title_eng: "Subscribers",
    path: '/dashboard/subscribers',
    icon: (
      <SvgIcon fontSize="small" style={{color: 'white'}}>
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title_ka: 'გამოქვეყნებული პარტნიორები',
    title_eng: "Published Partners",
    path: '/dashboard/published-partners',
    icon: (
      <SvgIcon fontSize="small" style={{color: 'white'}}>
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title_ka: 'გამოქვეყნებული პროექტები',
    title_eng: "Published Projects",
    path: '/dashboard/published-projects',
    icon: (
      <SvgIcon fontSize="small" style={{color: 'white'}}>
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title_ka: 'გამოქვეყნებული რეპორტები',
    title_eng: "Published Projects",
    path: '/dashboard/published-reports',
    icon: (
      <SvgIcon fontSize="small" style={{color: 'white'}}>
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title_ka: 'სიახლის დამატება',
    title_eng: "Add News",
    path: '/dashboard/add-news',
    icon: (
      <SvgIcon fontSize="small" style={{color: 'white'}}>
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title_ka: 'პროექტის დამატება',
    title_eng: "Add Project",
    path: '/dashboard/add-project',
    icon: (
      <SvgIcon fontSize="small" style={{color: 'white'}}>
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title_ka: 'პარტნიორის დამატება',
    title_eng: "Add Partner",
    path: '/dashboard/add-partner',
    icon: (
      <SvgIcon fontSize="small" style={{color: 'white'}}>
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title_ka: 'წლიური ანგარიშის დამატება',
    title_eng: "Add Calculation",
    path: '/dashboard/add-calculation',
    icon: (
      <SvgIcon fontSize="small" style={{color: 'white'}}>
        <CogIcon />
      </SvgIcon>
    )
  },
];
