import React, {Component} from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select"
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles/FormStyles';
import {LanguageContext} from "./contexts/LanguageContext";
const words = {
    english: {
        email: "email",
        signIn: "sign in",
        password: "password",
        remember: "remember me"
    },
    french: {
        email: "adresse electronique",
        signIn: "se conntetor",
        password: "mot de passe",
        remember: "souviens"

    },
    spanish: {
        email: "correo electronico",
        signIn: "registrarse",
        password: "contrasena",
        remember: "recuerdame"

    }
};
class Form extends Component {
    static contextType = LanguageContext;
    render() {
        const {language, changeLanguage} = this.context;
        const {classes} = this.props;
        const {email, signIn, password, remember} = words[language];
        return (
           <main className={classes.main}>
               <Paper className={classes.paper}>
                   <Avatar className={classes.avatarClass}>
                        <LockOutlinedIcon/>
                   </Avatar>
                   <Typography variant='h5'>Sign In</Typography>
                   <Select value={language} onChange={changeLanguage}>
                       <MenuItem value='english'>English</MenuItem>
                       <MenuItem value='french'>French</MenuItem>
                       <MenuItem value='spanish'>Spanish</MenuItem>
                   </Select>
                   <form className={classes.form}>
                       <FormControl margin='normal' required fullWidth>
                           <InputLabel htmlFor='email'>{email}</InputLabel>
                           <Input id='email' name='email' autoFocus/>
                       </FormControl>
                       <FormControl margin='normal' required fullWidth>
                           <InputLabel htmlFor='password'>{password}</InputLabel>
                           <Input id='password' name='password' autoFocus/>
                       </FormControl>
                       <FormControlLabel control={<Checkbox color='primary'/>} label={remember}></FormControlLabel>
                       <Button variant='contained' type='submit' fullWidth color='primary' className={classes.submitClass}>{signIn}</Button>
                   </form>
               </Paper>
           </main>
        );
    }

}
export default withStyles(styles)(Form)
