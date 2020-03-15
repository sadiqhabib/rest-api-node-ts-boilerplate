import app from './App';
import CONFIG from './config/config';

// Bootstrap
import './config/cache';
import './config/db';

const PORT = CONFIG.PORT;

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  }

  console.log(`Server is listening on ${PORT}`);
});
