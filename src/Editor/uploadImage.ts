export default function () {
  // Write your own code here to upload image to cloud
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      );
    }, 1000);
  });
}
