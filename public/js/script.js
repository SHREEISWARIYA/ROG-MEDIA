const nameSelector = document.getElementById('name');
const emailSelector = document.getElementById('email');
const subjectSelector = document.getElementById('subject');
const phoneSelector = document.getElementById('phone');
const messageSelector = document.getElementById('message');
const sendButton = document.getElementById('sendMessage')
sendButton.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('done');
    const savedata = {
        name: nameSelector.value,
        email_address: emailSelector.value,
        subject: subjectSelector.value,
        phone: phoneSelector.value,
        message: messageSelector.value,

    }
    console.log(savedata);
    const response = await fetch("http://localhost:8080/savedata", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(savedata),
    })
        .then(async (doc) => {

            alert('Data Saved');
            console.log(doc.json())
            document.getElementById('myForm').reset()
        })
        .catch((err) => {
            document.getElementById('myForm').reset()
            alert("Data not saved");
            console.log(err)
        });
})
