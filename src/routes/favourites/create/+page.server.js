import db from '$lib/db.js';

export const actions ={
    create :async ({request}) =>{
        const data = await request.formData();

        let player = {
            name: data.get("name"),
            real_name: data.get("real_name"),
            country: data.get("country"),
            age: data.get("age"),
            
        };

       await db.addPlayer(player);
        return { success: true, message: "Player added successfully" };
    }
}