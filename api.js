const sstk = require("shutterstock-api");
const fs = require('fs');
const axios = require('axios');

// sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);
// sstk.setBasicAuth("AIOV2VUJGwAQrLUY41s1kR0ScbqKzov7", "fefTt4RGmyovFVXk");

sstk.setAccessToken("v2/QUlPVjJWVUpHd0FRckxVWTQxczFrUjBTY2JxS3pvdjcvMjY3OTYxMTE4L2N1c3RvbWVyLzMvY3JsMWxmR3p2Z1pydXFLR2hXcnFkeVpLRUthWEdMWXRwNkVQVWZRejIzQ29PXzVhSTBsVk14RGxoRWU3QUtEZGUwZVhJejdiTlZQQVJ5aHc4RHZPWXl3LUFxN1YzTU12MjFlMXUwWWZ1VjFSMERZVzZqU3l0RUptRFlCUktTNm41QU55dkRyZ3RkSzVBWUVZVEVZN055TGVCd2dGZEttLVpmd1lFR2tqSzFrdE92dTV5YWhBR094U2czX011N3VoRy1uMHIxbklDVDZlZ2NsOFExLXFZZw");

const computerVisionApi = new sstk.ComputerVisionApi();

const imageFile = fs.readFileSync("./tricolour.jpg");
const base64File = Buffer.from(imageFile).toString("base64");
const body = new sstk.ImageCreateRequest(base64File);
axios.post('https://api.shutterstock.com/v2/cv/images', {
  "base64_image" : base64File
}, {
  headers: {
    'Authorization' : "Bearer v2/QUlPVjJWVUpHd0FRckxVWTQxczFrUjBTY2JxS3pvdjcvMjY3OTYxMTE4L2N1c3RvbWVyLzMvY3JsMWxmR3p2Z1pydXFLR2hXcnFkeVpLRUthWEdMWXRwNkVQVWZRejIzQ29PXzVhSTBsVk14RGxoRWU3QUtEZGUwZVhJejdiTlZQQVJ5aHc4RHZPWXl3LUFxN1YzTU12MjFlMXUwWWZ1VjFSMERZVzZqU3l0RUptRFlCUktTNm41QU55dkRyZ3RkSzVBWUVZVEVZN055TGVCd2dGZEttLVpmd1lFR2tqSzFrdE92dTV5YWhBR094U2czX011N3VoRy1uMHIxbklDVDZlZ2NsOFExLXFZZw"
  }
})
.then( data => {
  console.log(data.data);
  return axios.get(`https://api.shutterstock.com/v2/cv/similar/images?asset_id=${data.data.upload_id}`, {
    headers: {
      'Authorization' : "Bearer v2/QUlPVjJWVUpHd0FRckxVWTQxczFrUjBTY2JxS3pvdjcvMjY3OTYxMTE4L2N1c3RvbWVyLzMvY3JsMWxmR3p2Z1pydXFLR2hXcnFkeVpLRUthWEdMWXRwNkVQVWZRejIzQ29PXzVhSTBsVk14RGxoRWU3QUtEZGUwZVhJejdiTlZQQVJ5aHc4RHZPWXl3LUFxN1YzTU12MjFlMXUwWWZ1VjFSMERZVzZqU3l0RUptRFlCUktTNm41QU55dkRyZ3RkSzVBWUVZVEVZN055TGVCd2dGZEttLVpmd1lFR2tqSzFrdE92dTV5YWhBR094U2czX011N3VoRy1uMHIxbklDVDZlZ2NsOFExLXFZZw"
    }
  } )
})
.then( d => {
  console.log(d.data);
})
.catch( e => {
  console.log(e.message);
})
// co`mputerVisionApi.uploadImage(body)
//   .then((data) => {
//     console.log(data.upload_id);
//     let asset_id = data.upload_id;
//     axios.post('https://api.shutterstock.com/v2/cv/images', {
//       "base64_image" : base64File
//     })
//     return computerVisionApi.getSimilarImages({
//       "asset_type": "images",
//       "asset_id": "U2f048bc65ad8ceb5f826f81747a6c01b"
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });`


