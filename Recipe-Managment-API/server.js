const { RecipeInventory } = require('./models');
const app = express();
const port = 4000;
require("dotenv").config();

app.use(express.json());

app.get('/')