import { useContext } from "react";
import { styled, Box, Grid } from "@mui/material";

//components

import Archive from './Archive';


import { DataContext } from "../../context/DateProvider";


const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Archives = ({note}) => {
  const { archiveNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
         <Grid container style={{ marginTop: 16 }}>
            {
            archiveNotes.map((archive) => (
              <Grid item>
                <Archive note={archive} />
              </Grid>
            ))}
          </Grid>
      </Box>
    </Box>
  );
};

export default Archives;
