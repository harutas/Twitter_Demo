import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

import AccountIcon from './Avatar';

const TextArea = () => {
    return (
        <>
            <h5><strong>Create Tweet</strong></h5>
            <div className="container col-md-6 border border-3 px-5 py-3 mb-3">
                <div className='d-flex justify-content-between mb-3'>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        size="small"
                        // value={name}
                        // onChange={handleChange}
                    />
                    <TextField
                        id="outlined-id"
                        label="Id"
                        size="small"

                        // value={name}
                        // onChange={handleChange}
                    />
                </div>

                <TextField fullWidth multiline rows={4} label="Tweet contents" id="tweet-content" />
                <div className='d-flex justify-content-between align-items-center mt-3'>
                    <Stack direction="row" sx={{ minWidth: 290, alignItems: 'center' }}>

                        <FormControl fullWidth size='small'>
                            <InputLabel id="demo-simple-select-label">Icon</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Icon"
                                // onChange={handleChange}
                            >
                                <MenuItem value={10}>None</MenuItem>
                                <MenuItem value={20}>Twitter official</MenuItem>
                                <MenuItem value={30}>Origin</MenuItem>
                            </Select>
                        </FormControl>
                        <div className='ms-3'>
                            <AccountIcon />

                        </div>
                    </Stack>

                    <Button variant="contained">Create Tweet</Button>
                </div>
            </div>
        </>
    )
}

export default TextArea