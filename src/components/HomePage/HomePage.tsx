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
  const [exchangeRates, setExchangeRates] = useState<HomePageObj[]>([]);

  useEffect(() => {
    axios
      .get(`https://api.nbp.pl/api/exchangerates/tables/C/`)
      .then((response) => {
        setExchangeRates(response.data[0].rates);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <Card sx={{ m: '3vh' }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Container>
              <Divider>AKTUALNE KURSY</Divider>
            </Container>
          </Grid>
          <Grid item xs={3} minWidth={220}>
            <Container sx={{ textAlign: 'center' }}>
              <Divider>
                {exchangeRates.length !== 0 && exchangeRates[3].code}
              </Divider>
              <Typography>
                kupno: {exchangeRates.length !== 0 && exchangeRates[3].bid} PLN
              </Typography>
              <Typography>
                sprzedaż: {exchangeRates.length !== 0 && exchangeRates[3].ask}
                PLN
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={3} minWidth={220}>
            <Container sx={{ textAlign: 'center' }}>
              <Divider>
                {exchangeRates.length !== 0 && exchangeRates[0].code}
              </Divider>
              <Typography>
                kupno: {exchangeRates.length !== 0 && exchangeRates[0].bid} PLN
              </Typography>
              <Typography>
                sprzedaż: {exchangeRates.length !== 0 && exchangeRates[0].ask}
                PLN
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={3} minWidth={220}>
            <Container sx={{ textAlign: 'center' }}>
              <Divider>
                {exchangeRates.length !== 0 && exchangeRates[5].code}
              </Divider>
              <Typography>
                kupno: {exchangeRates.length !== 0 && exchangeRates[5].bid} PLN
              </Typography>
              <Typography>
                sprzedaż: {exchangeRates.length !== 0 && exchangeRates[5].ask}
                PLN
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={3} minWidth={220}>
            <Container sx={{ textAlign: 'center' }}>
              <Divider>
                {exchangeRates.length !== 0 && exchangeRates[6].code}
              </Divider>
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
          <Button variant="contained">Wszystkie kursy</Button>
        </Container>
      </CardActions>
    </Card>
  );
};

export default HomePage;
