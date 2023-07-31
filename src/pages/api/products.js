 // 13h1QKyJuw6x9ptg

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xadal2t.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const PcBuilderProductsCollection = client.db("PC-Builder").collection("products");

    if (req.method === "GET") {
      const products = await PcBuilderProductsCollection.find({}).toArray();
      console.log(products);
      res.send({ message: "success", status: 200, data: products });
    }
    
    
    if (req.method === "GET") {
      const productId = req.params.productId || req.query.id; // Get the product ID from the request parameters or the query parameters
      const product = await PcBuilderProductsCollection.findOne({ _id: productId });
      if (product) {
        res.send({ message: "success", status: 200, data: product });
      } else {
        res.send({ message: "product not found", status: 404 });
      }
    }
    
    
    console.log(" database connected to MongoDB!");
  } finally {

  }
}
export default run;
