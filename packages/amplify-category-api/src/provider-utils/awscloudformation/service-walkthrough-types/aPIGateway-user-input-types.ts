/**
 * Defines the json object expected by the amplify api category
 */
export interface APIGatewayCLIInputs {
  /**
   * The schema version.
   */
  version: 1;

  /**
   * map of paths in the REST API.
   */
  paths: { [pathName: string]: Path };
}

type Path = {
  lambdaFunction: string;
  permissions: {
    setting: PermissionSetting;
    auth?: CrudOperation[];
    guest?: CrudOperation[];
    groups?: { [groupName: string]: CrudOperation[] }[];
  };
};

enum CrudOperation {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

enum PermissionSetting {
  PRIVATE = 'private',
  PROTECTED = 'protected',
  OPEN = 'open',
}
