import { app } from "./app";
import { PORT } from "./config";

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
