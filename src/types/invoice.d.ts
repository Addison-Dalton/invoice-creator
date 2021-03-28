type InvoiceFormValues = {
  id: number;
  invoiceNo: string;
  date: Date;
  termStart: Date | null;
  termEnd: Date | null;
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
