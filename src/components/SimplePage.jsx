import AccountIcon from "./AccountIcon"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LoopIcon from '@mui/icons-material/Loop';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import LinearScaleIcon from '@mui/icons-material/LinearScale';
import { Helper } from "../model";

const SimplePage = (props) => {
    return (
        <>
            <h3>Simple</h3>
            <Box>
                <Card variant="outlined">
                    <CardContent sx={{pb: 0}}>
                        <div className="d-flex">
                            <div  className="me-2">
                                <AccountIcon icon={props.value.icon} />
                            </div>
                            <div className="d-flex flex-column flex-grow-1">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Stack direction="row">
                                        <Typography sx={{fontSize: 15, fontWeight: "bold", mr: 1}} component="div">
                                            {props.value.name}
                                        </Typography>
                                        <Typography sx={{fontSize: 15, textAlign: "start"}} color="text.secondary">
                                        @{props.value.id}
                                        </Typography>
                                        <span style={{fontSize: 15}}>・</span>
                                        <Typography sx={{fontSize: 15}} color="text.secondary">
                                            {Helper.currentDateString()}
                                        </Typography>
                                    </Stack>
                                    <IconButton aria-label="liner-scale" size="small">
                                        <LinearScaleIcon fontSize="small" />
                                    </IconButton>
                                </div>
                                <Typography sx={{textAlign: "start", fontSize: 15, whiteSpace: "pre-line"}}>
                                    {props.value.content}
                                </Typography>
                            </div>
                        </div>

                        <Stack direction="row" justifyContent="space-around" sx={{my: 1}}>
                            <div className="font-size13">
                                <IconButton aria-label="reply" size="small">
                                    <ChatBubbleOutlineIcon fontSize="small" />
                                </IconButton>
                                <span className="grey px-1">118.3K</span>
                            </div>
                            <div className="font-size13">
                                <IconButton aria-label="retweet" size="small">
                                    <LoopIcon fontSize="small" />
                                </IconButton>
                                <span className="grey px-1">127.8K</span>
                            </div>
                            <div className="font-size13">
                                <IconButton aria-label="favorite" size="small">
                                    <FavoriteBorderIcon fontSize="small" />
                                </IconButton>
                                <span className="gery">1.3M</span>
                            </div>
                            <IconButton aria-label="file-upload" size="small">
                                <FileUploadIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default SimplePage