export async function getApi() {
    const url = `http://37.140.198.127/api/`;
    return fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({a: "don't cry :)"})})
}

export const sendVerify = async () => {
    const url = `http://37.140.198.127/api/auth/users/activation/`;
    await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uid: "MTg",
            token: "awucgc-6c6d499332c3860ccccd5905d2b2ee76",
        }),
        //mode: "no-cors",
    })
}