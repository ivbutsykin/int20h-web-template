import { Button } from "@mui/material";
import { func } from "prop-types";

function TodosTemplate({ onCreate }) {
  return (
    <Button variant="contained" onClick={onCreate}>
      Create
    </Button>
  );
}

TodosTemplate.propTypes = {
  onCreate: func.isRequired,
};

export default TodosTemplate;
