import { Ref, ref } from "vue";

class AuthEntity {
  constructor() {
    this.state = ref<boolean>(false);
  }
  public state;

  public setLogOut = (): void => {
    this.state.value = false;
  };

  public setLogIn = (): void => {
    this.state.value = true;
  };
}

export const auth = new AuthEntity();
