import { AccessControl } from "accesscontrol";
import { Permission } from "../types/permission";

const permissions: Permission[] = [
  { role: "admin", resource: "notification", action: "read:any", attributes: "*" },
  { role: "user", resource: "notification", action: "read:own", attributes: "*" },
]

const accessControl = new AccessControl(permissions);

export default accessControl;
