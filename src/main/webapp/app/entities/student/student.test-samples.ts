import dayjs from 'dayjs/esm';

import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 74978,
};

export const sampleWithPartialData: IStudent = {
  id: 47143,
  name: 'withdrawal Funk',
};

export const sampleWithFullData: IStudent = {
  id: 34318,
  name: 'Mongolia SQL mobile',
  email: 'Greg.Wintheiser@yahoo.com',
  dob: dayjs('2023-06-19'),
};

export const sampleWithNewData: NewStudent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
