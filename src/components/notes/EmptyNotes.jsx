

import { LightbulbOutlined as Lightbulb } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';


const Light = styled(Lightbulb)`
  font-size: 120px;
  color: #f5f5f5;
`

const Text = styled(Typography)`
  color: #80868b;
  font-size : 22px;

`

const ContainerBulb = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  
`

const EmptyNotes = () => {
    return (
        <ContainerBulb>
            <Light />
            <Text>Notes you add apper here </Text>
        </ContainerBulb>
    )
}

export default EmptyNotes;