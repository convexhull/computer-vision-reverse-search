const sstk = require("shutterstock-api");
const fs = require('fs');

// sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);
// sstk.setBasicAuth("AIOV2VUJGwAQrLUY41s1kR0ScbqKzov7", "fefTt4RGmyovFVXk");

sstk.setAccessToken("v2/QUlPVjJWVUpHd0FRckxVWTQxczFrUjBTY2JxS3pvdjcvMjY3OTYxMTE4L2N1c3RvbWVyLzMvY3JsMWxmR3p2Z1pydXFLR2hXcnFkeVpLRUthWEdMWXRwNkVQVWZRejIzQ29PXzVhSTBsVk14RGxoRWU3QUtEZGUwZVhJejdiTlZQQVJ5aHc4RHZPWXl3LUFxN1YzTU12MjFlMXUwWWZ1VjFSMERZVzZqU3l0RUptRFlCUktTNm41QU55dkRyZ3RkSzVBWUVZVEVZN055TGVCd2dGZEttLVpmd1lFR2tqSzFrdE92dTV5YWhBR094U2czX011N3VoRy1uMHIxbklDVDZlZ2NsOFExLXFZZw");

const computerVisionApi = new sstk.ComputerVisionApi();

const imageFile = fs.readFileSync("./myImage.jpg");
const base64File = Buffer.from(imageFile).toString("base64");
const body = new sstk.ImageCreateRequest(base64File);

computerVisionApi.uploadImage(body)
  .then((data) => {
    console.log(data.upload_id);
    // return computerVisionApi.getSimilarImages({
    //   "asset_type": "images",
    //   "asset_id": data.upload_id
    // });
  })
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });


