export type AgendaStatus =
  | "DRAFT"
  | "SCHEDULED"
  | "ONGOING"
  | "DONE"
  | "CANCELLED";


export type AgendaPriority =
  | "LOW"
  | "MEDIUM"
  | "HIGH";


export type AgendaCategory =
  | "IBADAH"
  | "KAJIAN"
  | "SOSIAL"
  | "RAPAT"
  | "LAINNYA";


export interface Agenda {

  id:number;

  title:string;

  description:string;

  category:AgendaCategory;

  date:string;

  startTime:string;

  endTime:string;

  location:string;

  coordinator:string;

  participants:number;

  status:AgendaStatus;

  priority:AgendaPriority;

  createdAt:string;

}
