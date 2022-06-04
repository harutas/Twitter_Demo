import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import AccountIcon from './AccountIcon';



const TextArea = (props) => {
    return (
        <>
            <h5><strong>Create Tweet</strong></h5>
            <div className="container col-md-6 border border-3 px-5 py-3 mb-3">
                <div className='d-flex justify-content-between flex-wrap'>
                    <TextField
                        name='name'
                        id="outlined-name"
                        label="Name"
                        size="small"
                        className='col-12 mb-3'
                        value={props.value.name}
                        onChange={props.onChange}
                    />
                    <TextField
                        name='id'
                        id="outlined-id"
                        label="Id"
                        size="small"
                        className='col-12 mb-3'
                        value={props.value.id}
                        onChange={props.onChange}
                    />
                </div>

                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name='content'
                    label="Tweet contents"
                    id="tweet-content"
                    value={props.value.content}
                    onChange={props.onChange}
                />
                <div className='d-flex flex-column mt-3'>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>

                        <FormControl fullWidth size='small' sx={{flexGrow: 1}}>
                            <InputLabel id="demo-simple-select-label">Icon</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                name='icon'
                                id="demo-simple-select"
                                defaultValue={"images/Twitter.jpg"}
                                value={props.value.icon}
                                label="Icon"
                                onChange={props.onChange}
                            >
                                <MenuItem value={"images/Twitter.jpg"}>Twitter official</MenuItem>
                                <MenuItem value={"images/Recursion.jpg"}>Recursion official</MenuItem>
                                <MenuItem value={"images/origin.jpg"}>Original Icon</MenuItem>
                            </Select>
                        </FormControl>
                        <div className='ms-3'>
                            <AccountIcon icon={props.value.icon} />
                        </div>
                    </Box>
                    <div className='d-flex justify-content-end col-12 mt-2'>
                        <Button variant="contained">Create Tweet</Button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default TextArea