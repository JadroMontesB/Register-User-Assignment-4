function createRow(users){

    for(let i=0; i < users.length; i++)
    {
        let user = users[i];

        let tmp=`
        <tr>
        <td> ${[i]} </td>
        <td> ${user.email} </td>
        <td> ${user.password} </td>
        <td> ${user.first} </td>
        <td> ${user.last} </td>
        <td> ${user.age} </td>
        <td> ${user.address} </td>
        <td> ${user.phone} </td>
        <td> ${user.payment} </td>
        </tr>
        
        
        `;

        $(".table").append(tmp);
    }
}

function init(){

    console.log("Listing Users");
    let users = readUsers();
    createRow(users);
}

window.onload=init;