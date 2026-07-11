export type JamaahGender =
  | "LAKI-LAKI"
  | "PEREMPUAN";


export type JamaahStatus =
  | "AKTIF"
  | "NONAKTIF";


export interface Jamaah {

  id?: number;

  name:string;

  nik:string;

  gender:JamaahGender;

  birthDate:string;

  phone:string;

  address:string;

  occupation:string;

  group:string;

  status:JamaahStatus;

  joinDate:string;

  notes:string;

  createdAt?:string;

}
