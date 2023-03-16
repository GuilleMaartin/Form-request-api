const api_url = ("https://hub.dummyapis.com/employee?noofRecords=50&idStarts=1001");
let search = document.getElementById("search");
let data_output = document.getElementById("data-output");

let users=[]


window.addEventListener("DOMContentLoaded", async ()=>{

    data_output.innerHTML = "Loading..."

    const data = await reciveData()
    users = data
    renderApi(users)
});

async function reciveData(){
    const response = await fetch(api_url)
    return await response.json()
}

search.addEventListener("keyup", (e)=>{
    const newUsers = users.filter((user) => 
    `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}${user.id}${user.email.toLowerCase()}`
    .includes(search.value.toLowerCase()))
    renderApi(newUsers)
});

const createApiItems = users => users.map(user => 
    `
    <thead>
        <tr>
            <th>${user.id}</th>
            <th>${user.lastName}</th>
            <th>${user.firstName}</th>
            <th>${user.email}</th>
        </tr>
    </thead>
    `).join('');

function renderApi(users){
    const itemList = createApiItems(users)
    data_output.innerHTML = itemList
}

