import { Component, Vue } from 'vue-property-decorator';
import { FirestoreCollection } from '@/lib/firebase-web';
import { User } from '@/lib/model';

@Component({
  components: {}
})
export default class Main extends Vue {
  public async mounted() {
    console.log('mounted');
    const col = new FirestoreCollection<User>('/user');
    // const u = col.create(User);
    // console.log(u);
    const list = await col.get(User);

    // await u.saveSync();
  }
}
