type InvoiceFormValues = {
  id: number;
  invoiceNo: string;
  date: Date;
  term: string; // date range work was done within
  personalInfo: PersonalInfo;
  workItems: WorkItem[];
}

type PersonalInfo = {
  name: string;
  email: string
  phone: string;
  address: string;
}

type WorkItem = {
  description: WorkItemDescription;
  hours: number;
  rate: number;
}

type WorkItemDescription = {
  date: string;
  projectTitle: string;
  projectDescription: string;
  additionalInfo: string;
}

type InvoiceFormAction = {
  type: InvoiceFormActionType;
  key: string;
  value: string
}

type InvoiceFormActionType = 'change_base_info' | 'change_personal_info' | 'change_work_item';

/* eslint-disable no-unused-vars */
type HandleInputChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  type: InvoiceFormActionType
) => void;

type FormFields = {
  handleInputChange: HandleInputChange;
  values: InvoiceFormValues
}
