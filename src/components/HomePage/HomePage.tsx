import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
} from '@mui/material';
import { HomePageObj } from '../../helpers/interfaces';

const HomePage = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nbp.pl/api/exchangerates/tables/C/`)
      .then((response) => {
        setExchangeRates(response.data[0].rates);
      })
      .catch((err) => console.error(err.message));

    console.log(exchangeRates);

    /* if (exchangeRates.length !== 0) {
      const euro: HomePageObj = exchangeRates[3];
      const euroName = euro.bid;
      console.log(euroName);
    } */
  }, []);

  return (
    <Card sx={{ m: '3vh' }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid container xs={12}>
            <Container>
              <Divider>AKTUALNE KURSY</Divider>
            </Container>
          </Grid>
          <Grid container xs={3} minWidth={220}>
            <Container sx={{ textAlign: 'center' }}>
              <Divider></Divider>
              <Typography>
                kupno: {exchangeRates.length !== 0 && exchangeRates[3].bid} PLN
              </Typography>
              <Typography>
                sprzedaż: {exchangeRates.length !== 0 && exchangeRates[3].ask}
                PLN
              </Typography>
            </Container>
          </Grid>
          <Grid container xs={3} minWidth={220}>
            <Container sx={{ textAlign: 'center' }}>
              <Divider>USD</Divider>
              <Typography>
                kupno: {exchangeRates.length !== 0 && exchangeRates[0].bid} PLN
              </Typography>
              <Typography>
                sprzedaż: {exchangeRates.length !== 0 && exchangeRates[0].ask}
                PLN
              </Typography>
            </Container>
          </Grid>
          <Grid container xs={3} minWidth={220}>
            <Container sx={{ textAlign: 'center' }}>
              <Divider>CHF</Divider>
              <Typography>
                kupno: {exchangeRates.length !== 0 && exchangeRates[5].bid} PLN
              </Typography>
              <Typography>
                sprzedaż: {exchangeRates.length !== 0 && exchangeRates[5].ask}
                PLN
              </Typography>
            </Container>
          </Grid>
          <Grid container xs={3} minWidth={220}>
            <Container sx={{ textAlign: 'center' }}>
              <Divider>GBP</Divider>
              <Typography>
                kupno: {exchangeRates.length !== 0 && exchangeRates[6].bid} PLN
              </Typography>
              <Typography>
                sprzedaż: {exchangeRates.length !== 0 && exchangeRates[6].ask}
                PLN
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained'>Wszystkie kursy</Button>
        </Container>
      </CardActions>
    </Card>
  );
};

export default HomePage;
