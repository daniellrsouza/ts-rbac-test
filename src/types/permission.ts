export type Resource = 'notification';

export type Role = 'user' | 'admin';

export type Action = 'read:any' 
| 'create:any' 
| 'update:any' 
| 'delete:any' 
| 'read:own'
| 'create:own'
| 'update:own'
| 'delete:own';

export type EndpointAction = 'readAny' 
| 'createAny' 
| 'updateAny' 
| 'deleteAny' 
| 'readOwn'
| 'createOwn'
| 'updateOwn'
| 'deleteOwn';

export type Permission = {
  role: Role,
  resource: Resource,
  action: Action,
  attributes: string;
}