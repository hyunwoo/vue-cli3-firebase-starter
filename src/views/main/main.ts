import { Component, Vue } from 'vue-property-decorator';
import { FirestoreCollection, FirestoreDocument } from '@/lib/firebase-web';
import { Message } from '@/lib/model';

@Component({
  components: {}
})
export default class Main extends Vue {
  private messages: Array<FirestoreDocument<Message>> = [];
  private colMessage: FirestoreCollection<Message> = new FirestoreCollection<
    Message
  >('/message');
  private formMessage: FirestoreDocument<Message> = this.colMessage.create(
    Message
  );
  private sending: boolean = false;
  public async mounted() {
    this.colMessage.onChange(Message, (message, state) => {
      console.error(message, state);
      if (state === 'added') {
        this.messages.unshift(message);
      } else if (state === 'removed') {
        const index = this.messages.findIndex((src) => src.id === message.id);
        if (index > -1) {
          this.messages.splice(index, 1);
        }
      }
    });

    // await u.saveSync();
  }
  public async sendMessage() {
    this.formMessage.data.createdAt = new Date().getTime();
    const name = this.formMessage.data.name;
    this.sending = true;
    await this.formMessage.saveSync();
    this.sending = false;
    this.formMessage = this.colMessage.create(Message);
    this.formMessage.data.name = name;
  }
  public async removeMessage(message: FirestoreDocument<Message>) {
    message.delete();
  }
}
