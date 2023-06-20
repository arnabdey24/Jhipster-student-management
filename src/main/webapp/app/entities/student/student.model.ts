import dayjs from 'dayjs/esm';
import { IDepartment } from 'app/entities/department/department.model';
import { Gender } from 'app/entities/enumerations/gender.model';

export interface IStudent {
  id: number;
  name?: string | null;
  email?: string | null;
  dob?: dayjs.Dayjs | null;
  gender?: keyof typeof Gender | null;
  passed?: boolean | null;
  department?: Pick<IDepartment, 'id'> | null;
}

export type NewStudent = Omit<IStudent, 'id'> & { id: null };
