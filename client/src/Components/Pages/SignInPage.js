import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: 20
    },
}));

export default function SignIn() {
    const history = useHistory();

    const [state, setState] = useState({
        phone: '',
        password: '',
    })

    const handleClick = (path) => {history.push(path)};
    const classes = useStyles();

    const handlePhone = (evt) => {
        setState({
            ...state,
            phone: evt.target.value
        })
    }

    const handlePassword = (evt) => {
        setState({
            ...state,
            password: evt.target.value
        })
    }

    const onClickSubmit = async (evt) => {
        evt.preventDefault();
        const [err, response] = await to(axios.post('http://localhost:5000/auth/login', state));
        if (err) throw err;

        const data = response.data;
        localStorage.setItem('user', JSON.stringify(data.user));

        history.push('/');
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        value={state.phone}
                        fullWidth
                        id="telephone"
                        label="Phone Number"
                        name="telephone"
                        autoComplete="telephone"
                        type="tel"
                        inputProps={{ pattern: "^\\+?3?8?(0\\d{9})$"}}
                        autoFocus
                        onChange={handlePhone}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        value={state.password}
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handlePassword}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onClickSubmit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2"  onClick={() => handleClick("/reset-password")}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2"  onClick={() => handleClick("/sign-up")}>
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}