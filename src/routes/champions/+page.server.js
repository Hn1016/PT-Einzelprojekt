import db from '$lib/db';

export async function load() {
    try {
        const champions = await db.getChampions();
        return { champions };
    } catch (err) {
        console.error("Error in load():", err);
        throw error(500, "Failed to load champions");
    }
}