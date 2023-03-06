import { createError } from '~api/middlewares/error_handler';
import { STATUS_CODES } from '~constants';

export const NO_AVAILABLE_FOUNDS = 'no_available_founds';
export const noAVailableFoundsError = createError(NO_AVAILABLE_FOUNDS, STATUS_CODES.BAD_REQUEST);

export const ACCOUNT_INFORMATION_NOT_FOUND = 'account_information_not_found';
export const accountInfoNotFoundError = createError(ACCOUNT_INFORMATION_NOT_FOUND, STATUS_CODES.NOT_FOUND);

export const INVALID_ACCOUNT_IDS = 'invalid_account_ids';
export const invalidAccountIdsError = createError(INVALID_ACCOUNT_IDS, STATUS_CODES.BAD_REQUEST);
