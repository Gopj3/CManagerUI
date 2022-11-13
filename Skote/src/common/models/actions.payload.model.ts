export interface IHistoryFn {
  push: Function;
}

export interface IValuesHistoryModel<T> extends IHistoryFn {
  values: T;
  history?: IHistoryFn;
}

export interface IActionsDataHistoryPayload<T> {
  payload: IValuesHistoryModel<T>;
}

export interface IActionsHistoryPayload {
  payload: { history: IHistoryFn };
}
