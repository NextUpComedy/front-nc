import Earnings from 'assets/images/Earnings.png';
import Balance from 'assets/images/Balance.png';
import Payouts from 'assets/images/Payouts.png';
import Content from 'assets/images/Content.png';
import PendingUsers from 'assets/images/pendinguser.png';
import AllUsers from 'assets/images/user.png';

export const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80';
export const DEFAULT_BANNER = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
export const LOGO_URL = 'https://appcmsprod.viewlift.com/60333573-228c-4678-9ce8-05c713847241/images/1240pxNextUpLogoTurquoise.png';

export const DEFAULT_USER_STATE = {
  id: null,
  name: null,
  email: null,
  image: DEFAULT_AVATAR,
  roleId: null,
};

export const ROLES = {
  SYSTEM: 1,
  MASTER_ADMIN: 2,
  ADMIN: 3,
  COMEDIAN: 4,
};

export const USER_STATUS = {
  1: 'pending',
  2: 'approved',
  3: 'rejected',
  4: 'banned',
};

export const HTTP_EXCEPTIONS_MESSAGES = {
  'CHECK EMAIL': 'Successfully registered! Please check your email to verify your account.', // update the backend to specify the email type -reset password, etc.
  'WAITING APPROVAL': 'This account is waiting for approval, hang tight!',
  UNAUTHORIZED: 'You dont have the authority to do this action.',
  'INVALID CREDENTIALS': 'Invalid credentials.',
  'Incorrect email or password': 'We could not recognize your email or password.',
  'Internal Server Error': 'It is us! something went wrong. Please try again later.',
  'ALREADY REJECTED': 'This account has already been rejected.', // TODO: find a better message to humiliate them professionally
  'ALREADY APPROVED': 'This account is already registered!',
  'SUCCESS PROCESS': 'Successfully created!',
  'SUCCESS EDIT': 'Congratulation, you edited your profile successfully!',
  'SUCCESS LOGIN': 'Successfully logged in.',
  'BANNED USER SUCCESSFULLY': 'Successfully banned user',
  'SUCCESS LOGOUT': 'Successfully logged out.',
  'NOT EXIST USER': 'This user does not exist.',
  'PENDING ACCOUNT': 'This account is still pending for approval.',
  'RESET PASSWORD': 'This password has been reset.',
  'INCORRECT PASSWORD': 'Your old password is incorrect.',
  'PASSWORD CHANGED': 'Your password has been changed.',
  'Content matched successfully': 'Content matched successfully.',
  'ADDED USER SUCCESSFULLY': 'User added successfully.',
  'EDIT SUCCESSFULLY': 'Successfully edited.',
  'User\'s Stripe Account Added Successfully': 'User\'s Stripe Account Added Successfully',
  "You can't create a report ended at a date after this moment": 'You can\'t create a report ended at a date after this moment',
  "Report end date shouldn't be the same as report start": 'Report end date shouldn\'t be the same as report start',
  'New report was created successfully and the revenue calculation process has been launched. It can take up to 16 minutes': 'New report was created successfully and the revenue calculation process has been launched. It can take up to 16 minutes',
  'There is a pending calculation proccess, will be settled after 1 minutes': 'There is a pending calculation proccess, will be settled after 1 minutes',
  'APPROVED ACCOUNT': 'APPROVED ACCOUNT',
  'REJECT EMAIL CHECK': 'REJECT EMAIL CHECK',
  'ALREADY EXIST USER': 'ALREADY EXIST USER',
  'Match Successfully': 'Match Successfully',
  'BANNED ACCOUNT': 'BANNED ACCOUNT',
  'No enough balance to ask a payout': 'No enough balance to ask a payout',
  'Cancel Payout Successfully': 'Cancel Payout Successfully',
  'Success Payout': 'Success Payout',
  'User has no stripe account yet': 'User has no stripe account yet',
  'Only Stripe Connect platforms can work with other accounts. If you specified a client_id parameter, make sure it\'s correct. If you need to setup a Stripe Connect platform, you can do so at https://dashboard.stripe.com/account/applications/settings.': 'Only Stripe Connect platforms can work with other accounts.',
  'Payout rejected successfully': 'Payout rejected successfully',
  'DASHBOARD VARS CHANGED SUCCESSFULLY': 'Dashboard vars changed successfully',
  'jwt expired': 'something went wrong, please login again',
  'RESET EMAIL CHECK': "We've sent you an email with a link to reset your password.",
  'SUCCESS SIGNUP': 'Successfully signed up.',
  'RESET PASSWORD SUCCESSFULLY': 'Reset password successfully.',
};

export const IMAGE_VALIDATION_MESSAGES = {
  IMAGE_TYPE: 'Only JPG/PNG images are accepted!',
  IMAGE_SIZE: 'Image must be smaller than 2MB!',
};
export const ACCOUNT_REGISTRATION_REASONS = {
  Option1: 'User does not have content on NextUp',
  Option2: 'User already exists under a different account',
  Option3: 'Username or email contains offensive content',

};
export const PAYOUT_REJECTION_REASONS = {
  Option1: 'User does not have any revenue',
  Option2: 'User has not met the minimum payout threshold',
  Option3: 'User has not provided a valid payment method',
  Option4: 'User has not provided a valid tax ID',
  Option5: 'User has not provided a valid stripe account',
};

export const NEXTUP_COMEDEY_LINK = 'https://watch.nextupcomedy.com';
export const LOGO = 'https://appcmsprod.viewlift.com/60333573-228c-4678-9ce8-05c713847241/images/1240pxNextUpLogoTurquoise.png';

export const CORRECT_CHECKER = 'https://www.vippng.com/png/full/41-413660_julia-bayer-on-twitter-facebook-blue-tick-png.png';

export const INVALID_USER_MESSAGE = 'This user does not exist.';

export const icons = {
  Earnings,
  Balance,
  Payouts,
  Content,
  PendingUsers,
  AllUsers,
};
