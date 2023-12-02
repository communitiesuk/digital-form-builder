/**
 * Meta actions which do not affect a component's definition
 */
export enum Meta {
  NEW_COMPONENT = "NEW_COMPONENT",
  SET_COMPONENT = "SET_COMPONENT",
  SET_PAGE = "SET_PAGE",
  DELETE = "DELETE",
  VALIDATE = "VALIDATE",
  SET_SELECTED_LIST = "SET_SELECTED_LIST",
}

/**
 * actions which change the schema options
 */
export enum Schema {
  EDIT_SCHEMA_MIN = "EDIT_SCHEMA_MIN",
  EDIT_SCHEMA_MAX = "EDIT_SCHEMA_MAX",
  EDIT_SCHEMA_PRECISION = "EDIT_SCHEMA_PRECISION",
  EDIT_SCHEMA_LENGTH = "EDIT_SCHEMA_LENGTH",
  EDIT_SCHEMA_REGEX = "EDIT_SCHEMA_REGEX",
}

/**
 * actions which change the field options
 */
export enum Fields {
  EDIT_TITLE = "EDIT_TITLE",
  EDIT_NAME = "EDIT_NAME",
  EDIT_HELP = "EDIT_HELP",
  EDIT_CONTENT = "EDIT_CONTENT",
  EDIT_TYPE = "EDIT_TYPE",
}

/**
 * actions which change the options
 */
export enum Options {
  EDIT_OPTIONS_HIDE_TITLE = "EDIT_OPTIONS_HIDE_TITLE",
  EDIT_OPTIONS_REQUIRED = "EDIT_OPTIONS_REQUIRED",
  EDIT_OPTIONS_HIDE_OPTIONAL = "EDIT_OPTIONS_HIDE_OPTIONAL",
  EDIT_OPTIONS_FILE_UPLOAD_MULTIPLE = "EDIT_OPTIONS_FILE_UPLOAD_MULTIPLE",
  EDIT_OPTIONS_CLASSES = "EDIT_OPTIONS_CLASSES",
  EDIT_OPTIONS_MAX_DAYS_IN_FUTURE = "EDIT_OPTIONS_MAX_DAYS_IN_FUTURE",
  EDIT_OPTIONS_MAX_DAYS_IN_PAST = "EDIT_OPTIONS_MAX_DAYS_IN_PAST",
  EDIT_OPTIONS_CONDITION = "EDIT_OPTIONS_CONDITION",
  EDIT_OPTIONS_TYPE = "EDIT_OPTIONS_TYPE",
  EDIT_OPTIONS_ROWS = "EDIT_OPTIONS_ROWS",
  EDIT_OPTIONS_AUTOCOMPLETE = "EDIT_OPTIONS_AUTOCOMPLETE",
  EDIT_OPTIONS_CUSTOM_MESSAGE = "EDIT_OPTIONS_CUSTOM_MESSAGE",
  EDIT_OPTIONS_MAX_WORDS = "EDIT_OPTIONS_MAX_WORDS",
  EDIT_OPTIONS_PREFIX = "EDIT_OPTIONS_PREFIX",
  EDIT_OPTIONS_SUFFIX = "EDIT_OPTIONS_SUFFIX",
  EDIT_OPTIONS_MAX_FILE_UPLOAD_AMOUNT = "EDIT_OPTIONS_MAX_FILE_UPLOAD_AMOUNT",
  EDIT_OPTIONS_PARALLEL_UPLOAD_AMOUNT = "EDIT_OPTIONS_PARALLEL_UPLOAD_AMOUNT",
  EDIT_OPTIONS_ACCEPTED_FILES = "EDIT_OPTIONS_ACCEPTED_FILES",
  EDIT_OPTIONS_SHOW_SCRIPT_WARNING = "EDIT_OPTIONS_SHOW_SCRIPT_WARNING",
  EDIT_OPTIONS_MAX_FILE_SIZE = "EDIT_OPTIONS_MAX_FILE_SIZE",
  EDIT_OPTIONS_MIN_REQUIRED_FILES = "EDIT_OPTIONS_MIN_REQUIRED_FILES",
}

export const Actions = {
  ...Meta,
  ...Schema,
  ...Fields,
  ...Options,
};
export type ComponentActions = typeof Actions;
