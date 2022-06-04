import Avatar from '@mui/material/Avatar';

const AccountIcon = (props) => {
    return (
        <>
            <Avatar alt="Remy Sharp" src={props.icon} sx={{width: 50, height: 50}} />
        </>
    )
}

export default AccountIcon