import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router-dom";
import to from "await-to-js";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: 20
    },
}));

export default function SignUp() {
    const history = useHistory();

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        phone: '',
        email: '',
        password: '',
    })

    const handleChange = (evt) => {
        console.log('state: ', state);
        setState({
            ...state,
            [evt.target.id]: evt.target.value
        })
    }

    const onClickSubmit = async (evt) => {
        evt.preventDefault();

        const [err, response] = await to(axios.post('http://localhost:5000/auth/signup', {
            ...state,
            city: 'City',
            avatar: 'Avatar',
            description: 'Description',
        }));
        console.log('response: ', response);
        if (err) throw err;

        const data = response.data;
        localStorage.setItem('registration', JSON.stringify(data.user));

        history.push('/');
    }

    const handleClick = (path) => {history.push(path)};
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleChange}
                                value={state.firstName}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleChange}
                                value={state.lastName}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lastname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                value={state.userName}
                                variant="outlined"
                                required
                                fullWidth
                                id="userName"
                                label="Username"
                                name="userName"
                                autoComplete="userName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                value={state.phone}
                                variant="outlined"
                                required
                                fullWidth
                                id="phone"
                                label="Phone Number"
                                name="telephone"
                                autoComplete="telephone"
                                type="tel"
                                inputProps={{ pattern: "^\\+?3?8?(0\\d{9})$"}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                value={state.email}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                type="email"
                                inputProps={{ pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                value={state.password}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onClickSubmit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" onClick={() => handleClick("/sign-in")}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}