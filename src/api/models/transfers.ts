export interface TransferReport {
  name: string;
  ownAccountPercentage: number;
  externalAccountPercentage: number;
}

export interface TransferQuery {
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  pageSize?: number;
}
