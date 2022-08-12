/* eslint-disable import/no-import-module-exports */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const create = async ({
  name, birthDate, email, address,
}) => {
  const newPatient = await prisma.patients.create({
    data: {
      name, birthDate, email, ...address[0],
    },
  });

  return newPatient;
};

const read = async () => {
  const patients = await prisma.patients.findMany();

  return patients;
};

const update = async (id, { name, birthDate, email, address }) => {
  const parsedIntId = parseInt(id); 

  const updatedPatient = await prisma.patients.update({
    where: { id: parsedIntId },
    data: {
      name, birthDate, email, ...address[0],
    },
  });

  return updatedPatient;
};

const remove = async (id) => {
  const parsedIntId = parseInt(id); 

  const removedPacient = await prisma.patients.delete({
    where: {
      id: parsedIntId,
    },
  });

  return removedPacient;
};

export default {
  create,
  read,
  update,
  remove,
};
