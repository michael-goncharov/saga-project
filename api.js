export const fetchData = async () => {
    try {
    //    const response = await fetch("https://randomuser.me/api")
        const response = await fetch("api/v1/programs/free")
        await console.log(response, 'response');
        const data = await response.text();
        await console.log(data, 'data');
        return data;
    } catch (e) {   
        console.log(e)
    }
}