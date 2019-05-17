import FirestoreDocumentData from '../firebase-web/firestore/documentData';

export default class Message extends FirestoreDocumentData {
  public name: string = '';
  public message: string = '';
  public createdAt: number = 0;
}
