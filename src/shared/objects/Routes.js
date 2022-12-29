import { ProtectLogin } from 'middleware';
import {
  RegisterPage,
  LoginPage,
  TermsPage,
  ForgetPasswordPage,
  VideoListPage,
  PayoutPage,
  DashboardSettingsPage,
  ChangePasswordPage,
  EditProfilePage,
  ResetPasswordPage,
  NewUsersPage,
  UserListPage,
  VerifyEmailPage,
  RejectedUsersPage,
  BannedUsersPage,
  AddNewUserPage,
  ContentListPage,
  StatisticsPage,
  EditUserDataPage,
  UserStatisticsPage,
  AdminStatisticsPage,
  AdminPayoutPage,
  AddStripeUserPage,
  RepoetPage,
} from 'pages';

function ProtectedLoginPage() {
  return (
    <ProtectLogin>
      <LoginPage />
    </ProtectLogin>
  );
}

const routes = [
  {
    path: 'signup',
    Component: RegisterPage,
    title: 'Sign Up',
    key: 'signup',
    pro: true,

  },
  {
    path: 'login',
    Component: ProtectedLoginPage,
    title: 'Log In',
    key: 'login',
    pro: true,
  },
  {
    path: 'forgetPassword',
    Component: ForgetPasswordPage,
    title: 'Forget Password',
    key: 'forgetPassword',
  },
  {
    path: 'resetPassword',
    Component: ResetPasswordPage,
    title: 'Reset Password',
    key: 'resetPassword',
  },
  {
    path: 'terms',
    Component: TermsPage,
    title: 'Terms & Conditions',
    key: 'terms',
  },
  {
    path: 'verifyEmail',
    Component: VerifyEmailPage,
    title: 'Verify Email',
    key: 'verifyEmail',
  },
];
const comedianRoutes = [
  {
    title: 'Statistics',
    path: '/dashboard/statistics',
    Component: StatisticsPage,
    key: 'Statistics',
  },
  {
    title: 'yourVideos',
    path: '/dashboard/yourVideos',
    Component: VideoListPage,
    key: 'yourVideos',
  },
  {
    title: 'payout',
    path: '/dashboard/payout',
    Component: PayoutPage,
    key: 'payout',
  },
  {
    title: 'editProfile',
    path: '/dashboard/editProfile',
    Component: EditProfilePage,
    key: 'editProfile',
  },
  {
    title: 'changePassword',
    path: '/dashboard/changePassword',
    Component: ChangePasswordPage,
    key: 'changePassword',
  },

];

const adminRoutes = [

  {
    title: 'AdminStatistics',
    path: '/dashboard/statistics',
    Component: AdminStatisticsPage,
    key: 'AdminStatistics',
  },
  {
    title: 'UserStatistics',
    path: '/dashboard/userlist/statistics/:userId',
    Component: UserStatisticsPage,
    key: 'UserStatistics',
  },
  {
    title: 'editProfile',
    path: '/dashboard/editProfile',
    Component: EditProfilePage,
    key: 'editProfile',
  },
  {
    title: 'changePassword',
    path: '/dashboard/changePassword',
    Component: ChangePasswordPage,
    key: 'changePassword',
  },
  {
    title: 'adminPayout',
    path: '/dashboard/adminpayout',
    Component: AdminPayoutPage,
    key: 'adminPayout',
  },
  {
    title: 'newUsers',
    path: '/dashboard/newUsers',
    Component: NewUsersPage,
    key: 'newUsers',
  },
  {
    title: 'userList',
    path: '/dashboard/userList',
    Component: UserListPage,
    key: 'userList',
  },
  {
    title: 'rejectedUsers',
    path: '/dashboard/rejectedUsers',
    Component: RejectedUsersPage,
    key: 'rejectedUsers',
  },
  {
    title: 'bannedUsers',
    path: '/dashboard/bannedUsers',
    Component: BannedUsersPage,
    key: 'bannedUsers',
  },
  {
    title: 'contentList',
    path: '/dashboard/contentList',
    Component: ContentListPage,
    key: 'contentList',
  },
  {
    title: 'matchContent',
    path: '/dashboard/contentList/matchContent/:contentId',
    Component: ContentListPage,
    key: 'matchContent',
  },
  {
    title: 'editUser',
    path: '/dashboard/userList/editUser/:userId',
    Component: EditUserDataPage,
    key: 'editUser',
  },
  {
    title: 'addStripeAccount',
    path: '/dashboard/addStripeAccount',
    Component: AddStripeUserPage,
    key: 'addStripeAccount',
  },
  {
    title: 'CreateRepoet',
    path: '/dashboard//reports',
    Component: RepoetPage,
    key: 'CreateRepoet',
  },
];

const masterAdminRoutes = [

  {
    title: 'AdminStatistics',
    path: '/dashboard/statistics',
    Component: AdminStatisticsPage,
    key: 'AdminStatistics',
  },
  {
    title: 'UserStatistics',
    path: '/dashboard/userlist/statistics/:userId',
    Component: UserStatisticsPage,
    key: 'UserStatistics',
  },
  {
    title: 'editProfile',
    path: '/dashboard/editProfile',
    Component: EditProfilePage,
    key: 'editProfile',
  },
  {
    title: 'changePassword',
    path: '/dashboard/changePassword',
    Component: ChangePasswordPage,
    key: 'changePassword',
  },
  {
    title: 'Settings',
    path: '/dashboard/Settings',
    Component: DashboardSettingsPage,
    key: 'Settings',
  },
  {
    title: 'adminPayout',
    path: '/dashboard/adminpayout',
    Component: AdminPayoutPage,
    key: 'adminPayout',
  },
  {
    title: 'newUsers',
    path: '/dashboard/newUsers',
    Component: NewUsersPage,
    key: 'newUsers',
  },
  {
    title: 'userList',
    path: '/dashboard/userList',
    Component: UserListPage,
    key: 'userList',
  },
  {
    title: 'rejectedUsers',
    path: '/dashboard/rejectedUsers',
    Component: RejectedUsersPage,
    key: 'rejectedUsers',
  },
  {
    title: 'bannedUsers',
    path: '/dashboard/bannedUsers',
    Component: BannedUsersPage,
    key: 'bannedUsers',
  },
  {
    title: 'addNewUser',
    path: '/dashboard/addNewUser',
    Component: AddNewUserPage,
    key: 'addNewUser',
  },
  {
    title: 'contentList',
    path: '/dashboard/contentList',
    Component: ContentListPage,
    key: 'contentList',
  },
  {
    title: 'matchContent',
    path: '/dashboard/contentList/matchContent/:contentId',
    Component: ContentListPage,
    key: 'matchContent',
  },
  {
    title: 'editUser',
    path: '/dashboard/userList/editUser/:userId',
    Component: EditUserDataPage,
    key: 'editUser',
  },
  {
    title: 'addStripeAccount',
    path: '/dashboard/addStripeAccount',
    Component: AddStripeUserPage,
    key: 'addStripeAccount',
  },
  {
    title: 'CreateRepoet',
    path: '/dashboard//reports',
    Component: RepoetPage,
    key: 'CreateRepoet',
  },
];
export {
  routes, adminRoutes, comedianRoutes, masterAdminRoutes,
};
