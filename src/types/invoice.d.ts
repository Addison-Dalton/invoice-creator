type InvoiceFormValues = {
  id: number;
  invoiceNo: string;
  date: Date;
  termStart: Date;
  termEnd: Date;
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

type InputEventChange = import('react').ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
/* eslint-disable no-unused-vars */
type HandleInputChange = (
  e: InputEventChange,
  type: InvoiceFormActionType
) => void | undefined;

type HandleDateChange = (
  inputName: string,
  date: Date,
  type: InvoiceFormActionType
) => void | undefined;

type InvoiceFormFields = {
  values: InvoiceFormValues;
  handleInputChange: HandleInputChange;
  handleDateChange: HandleDateChange;
}
