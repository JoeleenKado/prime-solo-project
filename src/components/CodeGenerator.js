
const CodeGenerator = () => {
const ALPHA_NUMERIC =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let code = "";

// useEffect(() => {
//   setLicense("");
//   // LicenseDataService.getAll().then((res) => {
//   //   console.log("(3) getAlllicenses().then()", res);
//   //   res.shift();
//   //   setLicenses(res);
//   // });
// }, []);

for (let i = 0; i < 6; i++) {
  code += ALPHA_NUMERIC.charAt(
    Math.floor(Math.random() * ALPHA_NUMERIC.length)
  );
} //END for loop
// licenses.forEach((licenseObject) => {
//   const { license } = licenseObject;
//   console.log("(2)code:", code, "license:", license);
//   if (license === code) {
//     console.log("duplicate");
//     return concatenateCode();
//   }
// });
console.log('code:', code )
return code
}
export default CodeGenerator