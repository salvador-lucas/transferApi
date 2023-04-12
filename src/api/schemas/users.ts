export const userAccountSchema = {
  body: {
    type: 'object',
    required: ['currencyCode'],
    properties: {
      currencyCode: {
        type: 'string'
      },
      userId: { type: 'string' },
    }
  }
};
