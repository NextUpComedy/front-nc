import { getBannedList } from 'store/admin/thunk';
import { UsersTable } from 'shared/components';

function BannedUsers() {
  return (
    <UsersTable
      listToDisplay="bannedList"
      thunkFunction={getBannedList}
    />
  );
}

export default BannedUsers;
