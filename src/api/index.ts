export const getNameUser =async () => {
    try {
        const res                 = await fetch('https://jsonplaceholder.typicode.com/users/2');
        const data                = await res.json();
        return data.name
    } catch (err) {
        console.error(err)
    }
}