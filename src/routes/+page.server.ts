import { db } from '../lib/server/db';
import { users } from '../lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function load() {
  const allUsers = await db.select().from(users).all();
  return {
    users: allUsers,
  };
}

export const actions = {
  delete: async ({request}) => {
    const formData = await request.formData();
    const rid = Number(formData.get('id'));

    await db.delete(users).where(eq(users.id, rid));


    return {
      success: true,
    };
  },

  add: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    await db.insert(users).values({ name, email }).run();


    return {
      success: true,
    };
  },
};
