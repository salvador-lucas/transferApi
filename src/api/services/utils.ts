import { TransferReport } from '~api/models/transfers';

export function paginate(array: TransferReport[], pageSize?: number, pageNumber?: number): TransferReport[] {
  if(!pageSize)
    pageSize = 10;
  if(!pageNumber)
    pageNumber = 1;
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}
