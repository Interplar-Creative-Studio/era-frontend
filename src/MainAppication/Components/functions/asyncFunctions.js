export const fetchGet = (setData, url) => {
    fetch(url).then(response => response.json().then(res => setData(res)));
}