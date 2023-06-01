import { useContext } from "react";
import { styled, Box, Grid } from "@mui/material";

//components
import DeleteNote from './DeleteNote';
import { DataContext } from "../../context/DateProvider";


const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />

          <Grid container style={{ marginTop: 16 }}>
            {deleteNotes.map((note) => (
              <Grid item>
                <DeleteNote note={note} />
              </Grid>
            ))}
          </Grid>
        
      </Box>
    </Box>
  );
};

export default DeleteNotes;
