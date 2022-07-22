export const getNameUser =async () => {
    const res                 = await fetch('https://jsonplaceholder.typicode.com/users/2');
    const data                = await res.json();
    return data.name
}