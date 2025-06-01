import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("LeagueOfLegends"); // select database



// Get all champions
async function getChampions() {
  let champions = [];
  try {
    const collection = db.collection("ListOfChampions");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    champions = await collection.find(query).toArray();
    champions.forEach((champion) => {
      champion._id = champion._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return champions;
}

async function getChampionById(id) {
  let champion = null;
  try {
    const collection = db.collection("ListOfChampions");

    // Convert id to ObjectId
    const objectId = new ObjectId(id);

    // Get the champion by id
    champion = await collection.findOne({ _id: objectId });

    if (champion) {
      champion._id = champion._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    console.log(error);
  }
  return champion;
}


async function getEsportlers() {
  let players = [];
  try {
    const collection = db.collection("eSportler");
    players = await collection.find({}).toArray();
    players.forEach((player) => {
      player._id = player._id.toString();
    });
  } catch (error) {
    console.log(error);
  }
  return players;
}

async function getEsportlerById(id) {
  let player = null;
  try {
    const collection = db.collection("eSportler");
    const objectId = new ObjectId(id);
    player = await collection.findOne({ _id: objectId });
    if (player) {
      player._id = player._id.toString();
    }
  } catch (error) {
    console.log(error);
  }
  return player;
}

async function addPlayer(player) {
  try {
    const collection = db.collection("eSportler");
    const result = await collection.insertOne(player);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

async function updateEsportler(player) {
  try {
    let id = player._id;
    delete player._id;
    const collection = db.collection("eSportler");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: player });
    if (result.modifiedCount === 0) {
      console.log("No document found with the given ID.");
      return null;
    } else {
      return id; // Return the ID of the updated player
    }
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteEsportler(id) {
  try{
    const collection = db.collection('eSportler');
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query); 

    if (result.deletedCount === 0) {
      console.log("No document found with the given ID.");
      return null;
    } else {
      return id; // Return the ID of the deleted player
    }
  } catch (error) {
    console.log(error.message);
  }
  
}

// Export all functions
export default {
  getChampions,
  getChampionById,
  getEsportlers,
  getEsportlerById,
  addPlayer,
  updateEsportler,
  deleteEsportler
};