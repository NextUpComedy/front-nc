import { useEffect, useState } from 'react';
import {
  itemsSuperAdmin,
  itemsCOMEDIAN,
  itemsAdmin,
} from 'shared/objects/sidebarItems';
import { ROLES } from 'shared/constants';

function checkUserType(roleId) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (roleId === ROLES.MASTER_ADMIN || roleId === ROLES.SYSTEM) {
      setItems(itemsSuperAdmin);
    } else if (roleId === ROLES.ADMIN) {
      setItems(itemsAdmin);
    } else if (roleId === ROLES.COMEDIAN) {
      setItems(itemsCOMEDIAN);
    }
  }, [roleId]);
  return items;
}

export default checkUserType;
