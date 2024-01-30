/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */
import express from 'express';
// eslint-disable-next-line import/extensions
import mapRoutes from './routes';

const app = express();
const PORT = 1245;

mapRoutes(app);
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
