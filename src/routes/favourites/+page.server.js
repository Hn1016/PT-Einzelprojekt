import db from '$lib/db';

export async function load() {
    try {
        const players = await db.getEsportlers();
        return { players };
    } catch (err) {
        console.error("Error in load():", err);
        throw error(500, "Failed to load Esportler data");
    }
}