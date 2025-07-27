import 'dotenv/config';
import app from './app';
import constants from '@/lib/constants';

const { PORT } = constants;

app.listen(PORT, () => {
    console.log(`⚙️ Server is running at port: ${PORT}`);
});
