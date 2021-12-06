import ky from 'ky';

const getPrefixUrl = () => {
  if (process.env.NODE_ENV === 'production') return 'https://api.pmb.pmk.itb.ac.id/api';
  else {
    const port = process.env.PORT || 3000;
    return `http://localhost:${port}/api`;
  }
};

const client = ky.extend({
  prefixUrl: getPrefixUrl(),
  headers: { Authorization: `Bearer ${process.env.API_KEY as string}` },
});

export default client;
