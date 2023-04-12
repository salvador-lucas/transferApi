import { createError } from '~api/middlewares/error_handler';
import { STATUS_CODES } from '~constants';

export const NO_AVAILABLE_FOUNDS = 'no_available_founds';
export const noAVailableFoundsError = createError(NO_AVAILABLE_FOUNDS, STATUS_CODES.BAD_REQUEST);

export const USER_ID_NOT_FOUND = 'user_id_not_found';
export const userNotFoundError = createError(USER_ID_NOT_FOUND, STATUS_CODES.NOT_FOUND);
