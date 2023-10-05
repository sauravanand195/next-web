import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Projects', 'Dashboard', 'Logout'];

const CommonNav = () => {
    const Router = useRouter();
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleRedirect = (val) => {
        switch (val) {
            case 'Profile':
                Router.push('/portfolio');
                break;
            case 'Projects':
                Router.push('/projects');
                break;
            case 'Dashboard':
                console.log('Dashboard :>> ');
                break;
            case 'Logout':
                console.log('Logout :>> ');
                break;
            default:
                console.log('Default :>> ');
        }
        setAnchorElUser(null);
    }
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#405170" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <div>
                            <Image alt="Logo" src="/logo2.png" height="60" width="80" onClick={() => Router.push('/')} style={{ cursor: "pointer" }} />
                        </div>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >{page}</Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)} sx={{ p: 0 }}>
                                    <Avatar alt="Profile" src="/jarvis.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={() => { setAnchorElUser(null) }}
                            >
                                {settings.map((val, ind) => (
                                    <MenuItem key={ind} onClick={() => { handleRedirect(val) }}>
                                        <div>{val}</div>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default CommonNav;