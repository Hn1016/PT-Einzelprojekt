import db from '$lib/db.js';

export async function load() {
  const Champions = await db.getChampions();
  return { Champions };
}