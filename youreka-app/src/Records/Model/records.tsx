export interface Records {
  totalSize: number;
  done: boolean;
  records: RecordsAccount[];
}

export interface RecordsAccount {
  attributes: RecordAttributes;
  Id: string | null;
  Name: string | null;
  AnnualRevenue: number | null;
  Website: string | null;
  AccountNumber: string | null;
  Rating: string | null;
  UpsellOpportunity__c: string | null;
  Contacts: RecordsContact;
}

export interface RecordsContact {
  totalSize: number;
  done: boolean;
  records: {
    attributes: RecordAttributes;
    Id: string | null;
    Name: string | null;
    Title: string | null;
    Phone: string | null;
    Department: string | null;
    Email: string | null;
  }[];
}

export interface RecordAttributes {
  type: string | null;
  url: string | null;
}
