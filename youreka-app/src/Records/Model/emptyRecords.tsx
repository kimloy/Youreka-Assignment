import { Records } from "./records";

export const EmptyRecord: Records = {
  totalSize: 0,
  done: false,
  records: [
    {
      attributes: {
        type: null,
        url: null,
      },
      Id: null,
      Name: null,
      AnnualRevenue: null,
      Website: null,
      AccountNumber: null,
      Rating: null,
      UpsellOpportunity__c: null,
      Contacts: {
        totalSize: 0,
        done: false,
        records: [
          {
            attributes: {
              type: null,
              url: null,
            },
            Id: null,
            Name: null,
            Title: null,
            Phone: null,
            Department: null,
            Email: null,
          },
        ],
      },
    },
  ],
};
