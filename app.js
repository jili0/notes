const { MongoClient } = require("mongodb");

async function run() {
  // Note that in a production environment,
  // you do not want to store your password in plain-text here.
  const uri =
    "mongodb+srv://jingli:0319@cluster0.w2dclso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  const client = new MongoClient(uri);
  await client.connect();
  const dbName = "notes";
  const collectionName = "programming_notes";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const recipes = [
    {
      name: "elotes",
      ingredients: [
        "corn",
        "mayonnaise",
        "cotija cheese",
        "sour cream",
        "lime",
      ],
      prepTimeInMinutes: 35,
    },
    {
      name: "loco moco",
      ingredients: [
        "ground beef",
        "butter",
        "onion",
        "egg",
        "bread bun",
        "mushrooms",
      ],
      prepTimeInMinutes: 54,
    },
    {
      name: "patatas bravas",
      ingredients: [
        "potato",
        "tomato",
        "olive oil",
        "onion",
        "garlic",
        "paprika",
      ],
      prepTimeInMinutes: 80,
    },
    {
      name: "fried rice",
      ingredients: [
        "rice",
        "soy sauce",
        "egg",
        "onion",
        "pea",
        "carrot",
        "sesame oil",
      ],
      prepTimeInMinutes: 40,
    },
  ];

  try {
    const insertManyResult = await collection.insertMany(recipes);
    console.log(
      `${insertManyResult.insertedCount} documents successfully inserted.\n`
    );
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }


  const findQuery = { prepTimeInMinutes: { $lt: 45 } };

  try {
    const cursor = await collection.find(findQuery).sort({ name: 1 });
    await cursor.forEach((recipe) => {
      console.log(
        `${recipe.name} has ${recipe.ingredients.length} ingredients and takes ${recipe.prepTimeInMinutes} minutes to make.`
      );
    });
    // add a linebreak
    console.log();
  } catch (err) {
    console.error(
      `Something went wrong trying to find the documents: ${err}\n`
    );
  }

  const findOneQuery = { ingredients: "potato" };

  try {
    const findOneResult = await collection.findOne(findOneQuery);
    if (findOneResult === null) {
      console.log(
        "Couldn't find any recipes that contain 'potato' as an ingredient.\n"
      );
    } else {
      console.log(
        `Found a recipe with 'potato' as an ingredient:\n${JSON.stringify(
          findOneResult
        )}\n`
      );
    }
  } catch (err) {
    console.error(`Something went wrong trying to find one document: ${err}\n`);
  }


  const updateDoc = { $set: { prepTimeInMinutes: 72 } };


  const updateOptions = { returnOriginal: false };

  try {
    const updateResult = await collection.findOneAndUpdate(
      findOneQuery,
      updateDoc,
      updateOptions
    );
    console.log(
      `Here is the updated document:\n${JSON.stringify(updateResult.value)}\n`
    );
  } catch (err) {
    console.error(
      `Something went wrong trying to update one document: ${err}\n`
    );
  }

  const deleteQuery = { name: { $in: ["elotes", "fried rice"] } };
  try {
    const deleteResult = await collection.deleteMany(deleteQuery);
    console.log(`Deleted ${deleteResult.deletedCount} documents\n`);
  } catch (err) {
    console.error(`Something went wrong trying to delete documents: ${err}\n`);
  }

  // Make sure to call close() on your client to perform cleanup operations
  await client.close();
}
run().catch(console.dir);
