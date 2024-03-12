'use server';

import { PrismaClient } from '@prisma/client';

export const saveContactInfo = async (formData) => {
  const prisma = new PrismaClient();
  console.log('saving contact', formData);

  await prisma.contact.create({
    data: {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    },
  });

  console.log('contact saved');
};
