import { Grid, InputBase } from "@mui/material";
import SearchFieldProps from "../interfaces/Search";

const SearchField = ({
  handleMessageChange,
  handleEnterPress,
}: SearchFieldProps) => {

  return (
    <>
      <Grid container alignItems="center">
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              color: "#fff",
              fontSize: "0.9em",
              borderRadius: "5px",
              backgroundColor: "rgba(255, 255, 255, 0.200)",
              padding: "4px 4px 4px 14px",
            }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            onChange={handleMessageChange}
            onKeyPress={handleEnterPress}
          />
      </Grid>
    </>
  );
};

export default SearchField;
