const itemsSuperAdmin = [
  {
    title: 'Home',
    icon: 'fa fa-dashboard',
    children: [
      {
        title: 'Statistics',
        path: '/dashboard/statistics',
        key: 'statistics',
      },
      {
        title: 'Content List',
        path: '/dashboard/contentlist',
        key: 'contentlist',
      },
    ],
  },
  {
    title: 'Finance',
    icon: 'fa fa-money',
    children: [
      {
        title: 'Payout',
        path: '/dashboard/adminPayout',
        key: 'payout',
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        key: 'reports',
      },
      {
        title: 'Add Stripe Account',
        path: '/dashboard/addStripeAccount',
        key: 'addStripeAccount',
      },
    ],
  },
  {
    title: 'User Management',
    icon: 'fa fa-users',
    children: [
      {
        title: 'User List',
        path: '/dashboard/userlist',
        key: 'userlist',
      },

      {
        title: 'List of New Users',
        path: '/dashboard/newusers',
        key: 'newusers',
      },
      {
        title: 'List of Rejected Users',
        path: '/dashboard/rejectedusers',
        key: 'rejectedusers',
      },
      {
        title: 'List of Banned Users',
        path: '/dashboard/bannedusers',
        key: 'bannedUsers',
      },
      {
        title: 'Add New User',
        path: '/dashboard/addNewUser',
        key: 'addNewUser',
      },
    ],
  },
  {
    title: 'Account Settings',
    icon: 'fa fa-cog',

    children: [
      {
        title: 'Edit Profile',
        path: '/dashboard/editprofile',
        key: 'profile',
      },
      {
        title: 'Change Password',
        path: '/dashboard/changepassword',
        key: 'changepassword',
      },

    ],
    path: '/dashboard/AccountSettings',
  },
  {
    title: 'Dashboard Settings',
    icon: 'fa fa-cog',
    path: '/dashboard/Settings',
  },
  {
    title: 'Logout',
    icon: 'fa fa-sign-out',
    path: '/logout',
  },

];

const itemsAdmin = [
  {
    title: 'Home',
    icon: 'fa fa-dashboard',
    children: [
      {
        title: 'Statistics',
        path: '/dashboard/statistics',
        key: 'statistics',
      },
      {
        title: 'Content List',
        path: '/dashboard/contentlist',
        key: 'contentlist',
      },
    ],
  },
  {
    title: 'Finance',
    icon: 'fa fa-money',
    children: [
      {
        title: 'Payout',
        path: '/dashboard/adminPayout',
        key: 'revenue',
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        key: 'reports',
      },
      {
        title: 'Add Stripe Account',
        path: '/dashboard/addStripeAccount',
        key: 'addStripeAccount',
      },
    ],
  },
  {
    title: 'User Management',
    icon: 'fa fa-users',
    children: [
      {
        title: 'User List',
        path: '/dashboard/userlist',
        key: 'userlist',
      },

      {
        title: 'List of New Users',
        path: '/dashboard/newusers',
        key: 'newusers',
      },
      {
        title: 'List of Rejected Users',
        path: '/dashboard/rejectedusers',
        key: 'rejectedusers',
      },
      {
        title: 'List of Banned Users',
        path: '/dashboard/bannedusers',
        key: 'bannedUsers',
      },
    ],
  },
  {
    title: 'Account Settings',
    icon: 'fa fa-cog',

    children: [
      {
        title: 'Edit Profile',
        path: '/dashboard/editprofile',
        key: 'profile',
      },
      {
        title: 'Change Password',
        path: '/dashboard/changepassword',
        key: 'changepassword',
      },

    ],
    path: '/dashboard/AccountSettings',
  },
  {
    title: 'Logout',
    icon: 'fa fa-sign-out',
    path: '/logout',
  },
];
const itemsCOMEDIAN = [
  {
    title: 'Home',
    icon: 'fa fa-dashboard',
    children: [
      {
        title: 'Your Statistics ',
        path: '/dashboard/statistics',
        key: 'yourstatistics',
      },
      {
        title: 'Video List ',
        path: '/dashboard/yourvideos',
        key: 'yourvideos',
      },
    ],
  },
  {
    title: 'Finance',
    icon: 'fa fa-money',
    children: [
      {
        title: 'Payout',
        path: '/dashboard/payout',
        key: 'revenue',
      },
    ],
  },
  {
    title: 'Account Settings',
    icon: 'fa fa-cog',

    children: [
      {
        title: 'Edit Profile',
        path: '/dashboard/editprofile',
        key: 'profile',
      },
      {
        title: 'Change Password',
        path: '/dashboard/changepassword',
        key: 'changepassword',
      },

    ],
    path: '/dashboard/AccountSettings',
  },
  {
    title: 'Logout',
    icon: 'fa fa-sign-out',
    path: '/logout',
  },

];
export { itemsSuperAdmin, itemsAdmin, itemsCOMEDIAN };
