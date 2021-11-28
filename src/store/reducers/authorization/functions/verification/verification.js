export function verification(verify){
    const url = `${process.env.REACT_APP_API_URL}/api/auth/users/activation/`;
    fetch(url, {
        method: "POST",
        body: JSON.stringify(verify),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
    })
}