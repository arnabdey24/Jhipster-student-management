import dayjs from 'dayjs/esm';

import { Gender } from 'app/entities/enumerations/gender.model';

import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 34318,
};

export const sampleWithPartialData: IStudent = {
  id: 48898,
  name: 'Regional Classical And',
  dob: dayjs('2023-06-19'),
  passed: false,
};

export const sampleWithFullData: IStudent = {
  id: 23068,
  name: 'North Applications farad',
  email: 'Alberta.Wisoky2@hotmail.com',
  dob: dayjs('2023-06-20'),
  gender: 'OTHER',
  passed: false,
};

export const sampleWithNewData: NewStudent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
