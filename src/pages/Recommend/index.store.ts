
import { action, observable } from 'mobx';


class RecommendStore {
  static clickButton: any;
  static testStr: String;

   @observable testStr = 'Leon';

   @action
   clickButton = (): void => {
       this.testStr = 'Good';
   }

}

export default new RecommendStore();

