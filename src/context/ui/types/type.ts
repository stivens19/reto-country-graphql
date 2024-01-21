export interface IActionUi {
  type: string;
  payload: boolean;
}
export interface StateUi{
    activeFloat: boolean;
    loading:boolean;
}
export type TypeUiContext = {
  activeFloat: boolean;
  loading:boolean;
  dispatch: React.Dispatch<IActionUi>;
};
