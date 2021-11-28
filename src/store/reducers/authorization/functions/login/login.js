export async function login(user) {
    const url = `http://37.140.198.127/api/auth/jwt/create/`;
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(user),
    })

    return await response.json();
}