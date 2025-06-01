import db from '$lib/db.js';

export async function load({ params }) {
    const champion = await db.getChampionById(params.champion_id);

    if (!champion) {
        return {
            name: "Champion not found",

        }
    }
    return {
        i:champion.id,
        id:champion._id,
        name: champion.name,
        title: champion.title,
        blurb: champion.blurb,
        key: champion.key,
        tags: champion.tags,
        partype: champion.partype,
        info: {
            attack: champion.info.attack,
            defense: champion.info.defense,
            magic: champion.info.magic,
            difficulty: champion.info.difficulty
        },

    }
        ;
}