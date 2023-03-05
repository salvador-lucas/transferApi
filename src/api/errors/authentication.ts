import { createError } from '~api/middlewares/error_handler';
import { STATUS_CODES } from '~constants';

export const AUTHENTICATION_NOT_FOUND = 'authentication_not_found';
export const authenticationNotFoundError = createError(AUTHENTICATION_NOT_FOUND, STATUS_CODES.UNAUTHORIZED);

export const AUTHENTICATION_FAIL = 'authentication_fail';
export const authenticationFailError = createError(AUTHENTICATION_FAIL, STATUS_CODES.UNAUTHORIZED);

export const USER_EMAIL_EXIST_ERROR = 'user_email_exist_error';
export const userEmailExistError = createError(USER_EMAIL_EXIST_ERROR, STATUS_CODES.CONFLICT);
