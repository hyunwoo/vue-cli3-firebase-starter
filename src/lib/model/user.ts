import FirestoreDocumentData from '../firebase-web/firestore/documentData';

export default class User extends FirestoreDocumentData {
  public name: string = 'name inited';
  public displayName: string = 'display name inited';
}
