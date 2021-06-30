export interface APIItemI {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface ItemI {
  date: string;
  explanation: string;
  title: string;
  url: string;
}

export interface StateI {
  item: ItemI;
  test: string;
  loading: boolean;
}

export interface SetItemActionI {
  type: string;
  payload: any;
}

export type ActionsI = SetItemActionI;

export interface ContextI {
  state: StateI;
  dispatch: ActionsI;
}
