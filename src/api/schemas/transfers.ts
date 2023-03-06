export const transferSchema = {
  body: {
    type: 'object',
    required: ['accountFrom', 'accountTo', 'amount'],
    properties: {
      accountFrom: {
        type: 'number'
      },
      accountTo:  {
        type: 'number'
      },
      amount: {
        type: 'number'
      },
      date: {
        type: 'string',
        format: 'date'
      },
      description:  {
        type: 'string'
      }
    }
  }
};
