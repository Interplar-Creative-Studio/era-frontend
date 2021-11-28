export function singUpFetch(user) {
    const url = `${process.env.REACT_APP_API_URL}/api/auth/users/`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }).then(res => {
            if (res.ok) {
                console.log("ok");
            }
        }
    ).catch(() => console.log("err"));

}
