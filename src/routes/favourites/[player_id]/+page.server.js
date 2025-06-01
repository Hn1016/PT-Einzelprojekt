import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    const player = await db.getEsportlerById(params.player_id); // Make sure this function exists

    if (!player) {
        return {
            name: "Player not found"
        };
    }

    return {
        player: {
            _id: player._id.toString(),
            name: player.name,
            real_name: player.real_name,
            country: player.country,
            age: player.age
        },
    };
}

export const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const action = form.get('action');
    const id = form.get('player_id');

    if (!id) return { error: 'Missing ID' };

    if (action === 'update') {
      const updatedPlayer = {
        name: form.get('name'),
        real_name: form.get('real_name'),
        country: form.get('country'),
        age: Number(form.get('age'))
      };
      await db.updateEsportler(id, updatedPlayer);
      return { success: true };
    }

    if (action === 'delete') {
      await db.deleteEsportler(id);
      throw redirect(303, '/favourites');
    }

    return { error: 'Unknown action' };
  }
};