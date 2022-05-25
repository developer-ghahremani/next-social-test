import SocialRoute from "models/SocialRoute.model";

interface SettingActionInterface {
  type: "setSocialRoutes";
  payload: any;
}

interface SettingStateInterface {
  loading: boolean;
  socialRoutes: SocialRoute[];
}

export const settingInitialState: SettingStateInterface = {
  loading: true,
  socialRoutes: [],
};

export const settingReducer = (
  state = settingInitialState,
  action: SettingActionInterface
): SettingStateInterface => {
  switch (action.type) {
    case "setSocialRoutes":
      return { ...state, loading: false, socialRoutes: action.payload };

    default:
      return state;
  }
};
