import { Paper, Stack, Typography, IconButton } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { number, func } from "prop-types";

function Counter({ count, onDecrease, onIncrease }) {
  return (
    <Paper component={Stack} alignItems="center" spacing={2} py={6} px={3}>
      <Typography variant="h3" component="span">
        {count}
      </Typography>
      <Stack direction="row" spacing={1}>
        <IconButton onClick={onDecrease}>
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={onIncrease}>
          <AddIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
}

Counter.propTypes = {
  count: number.isRequired,
  onDecrease: func.isRequired,
  onIncrease: func.isRequired,
};

export default Counter;
