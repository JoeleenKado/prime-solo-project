import {Component} from 'react'


class ActionService extends Component {
   
   
fetchArt() {
        return {type: "FETCH_ART"}
    }

fetchUser() {
  return {type: 'FETCH_USER'}
}
   
   
   
   
    // async getAll() {
    //   console.log("usePTContext:", usePTContext);
    //   const licenses: License[] = Array(undefined);
    //   await readLicenses().then((docs) => {
    //     console.log(
    //       '(2) getAll() .then(); "Here are your firestore docs":',
    //       docs
    //     );
    //     docs.forEach((doc) => {
    //       const fields = doc._document.data.value.mapValue.fields;
    //       const docId = doc.id;
    //       const name = fields.name.stringValue;
    //       const type = fields.type.stringValue;
    //       const email = fields.email.stringValue;
    //       const license = fields.license.stringValue;
  
    //       licenses.push({
    //         name: name as string,
    //         docId: docId as string,
    //         type: type as string,
    //         email: email as string,
    //         license: license as string,
    //       });
    //     });
    //   });
    //   return licenses;
    // } //END getAll()
  
    // add(data: LicenseData) {
    //   console.log("inside LicenseDataServce.add:", data);
    //   return createLicense(data);
    // } //END add()
  
    // edit(license: string, data: LicenseData, docId: string) {
    //   console.log(
    //     `in licensce.service.update; 
    //     Updating document with Id: ${docId}; license: ${license}`
    //   );
    //   return updateLicense(license, docId, data);
    // } //END edit()
  
    // delete(docId: string, license: string, name: string) {
    //   console.log(
    //     `in license.service delete; docId:${docId}, license:${license}`
    //   );
    //   return removeLicense(docId, license, name);
    // } //END delete()
  } //END LicenseDataService
  export default new ActionService("");
  