export function singUpFetch(user) {
    const url = `http://37.140.198.127/api/auth/users/`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    }).then(res => {
            if (res.ok) {
                console.log("ok");
            }
        }
    ).catch(() => console.log("err"));

}
