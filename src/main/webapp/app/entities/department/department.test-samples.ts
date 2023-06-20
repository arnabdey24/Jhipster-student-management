import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 51982,
};

export const sampleWithPartialData: IDepartment = {
  id: 70825,
};

export const sampleWithFullData: IDepartment = {
  id: 46214,
  name: 'Van Administrator',
  email: 'Jazlyn.Lynch@hotmail.com',
};

export const sampleWithNewData: NewDepartment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
