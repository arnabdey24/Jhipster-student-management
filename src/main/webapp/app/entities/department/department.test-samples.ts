import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 92661,
};

export const sampleWithPartialData: IDepartment = {
  id: 90923,
  email: 'Jacinthe24@yahoo.com',
};

export const sampleWithFullData: IDepartment = {
  id: 3674,
  name: 'Gender',
  email: 'Liana_Herman46@hotmail.com',
};

export const sampleWithNewData: NewDepartment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
