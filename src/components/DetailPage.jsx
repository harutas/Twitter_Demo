import AccountIcon from "./AccountIcon"
// import AccountName from "./AccountName"
// import AccountId from "./AccountId"
// import TweetContent from "./TweetContent"
import IconButtons from "./IconButtons";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import { Helper } from "../model";



const DetailPage = (props) => {
    return (
        <>
            <h3>Detail</h3>
            <Box>
                <Card variant="outlined">
                    <CardContent sx={{pb: 0}}>
                        <div className="d-flex justify-content-between mb-2">
                            <div className="d-flex align-items-center">
                                <div  className="me-2">
                                    <AccountIcon icon={props.value.icon} />
                                </div>
                                <div className="d-flex flex-column">
                                    <Typography sx={{fontSize: 15, fontWeight: "bold"}} component="div">
                                        {props.value.name}
                                    </Typography>

                                    <Typography sx={{fontSize: 15, textAlign: "start"}} color="text.secondary">
                                        @{props.value.id}
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <IconButton aria-label="liner-scale" size="small">
                                    <LinearScaleIcon fontSize="small" />
                                </IconButton>
                            </div>
                        </div>

                        <Typography sx={{textAlign: "start", fontSize: 23, my: 1.5, whiteSpace: "pre-line"}}>
                            {props.value.content}
                        </Typography>
                        <Typography sx={{textAlign: "start", fontSize: 15, mb: 1}} color="text.secondary">
                            {Helper.currentDateFullString()}・Twitter Web App
                        </Typography>

                        <Divider />

                        <Stack direction="row" justifyContent="start" sx={{py: 1}}>
                            <div className="font-size14">
                                <span className="fw-bold">118.3K</span><span className="grey me-2"> 件のリツイート</span>
                            </div>
                            <div className="font-size14">
                                <span className="fw-bold">127.8K</span><span className="grey me-2"> 件の引用リツイート</span>
                            </div>
                            <div className="font-size14">
                                <span className="fw-bold">1.3M</span><span className="grey me-2"> 件のいいね</span>
                            </div>
                        </Stack>

                        <Divider />

                        <IconButtons />
                        
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default DetailPage