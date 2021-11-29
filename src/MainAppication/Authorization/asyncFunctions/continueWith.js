import axios from "axios";

export const continueWithGoogle = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)
        window.location.replace(res.data.authorization_url);
    } catch (err) {

    }
};

export const continueWithFacebook = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`)

        window.location.replace(res.data.authorization_url);
    } catch (err) {

    }
};