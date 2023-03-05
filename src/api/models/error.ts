export interface ErrnoException extends Error {
  parent: {
    code?: string;
    errno?: number;
  };
  sqlState?: string;
  sqlMessage?: string;
  stack?: string;
}
