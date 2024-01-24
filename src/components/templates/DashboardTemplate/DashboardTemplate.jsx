import { Container, Grid } from "@mui/material";
import Counter from "../../molecules/Couter/Counter";
import { number, func } from "prop-types";

function DashboardTemplate({ count, onDecreaseCount, onIncreaseCount }) {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12} sm={6} md={2}>
          <Counter
            count={count}
            onDecrease={onDecreaseCount}
            onIncrease={onIncreaseCount}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

DashboardTemplate.propTypes = {
  count: number.isRequired,
  onDecreaseCount: func.isRequired,
  onIncreaseCount: func.isRequired,
};

export default DashboardTemplate;
