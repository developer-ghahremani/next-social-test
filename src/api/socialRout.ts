import { AxiosResponse } from "axios";
import SocialRoute from "models/SocialRoute.model";
import api from "api";
import { endPonints } from "constant";

interface PostProps {
  type: string;
  link: string;
}
export const postSocialRoute = (
  data: PostProps
): Promise<AxiosResponse<SocialRoute[]>> =>
  api.post(endPonints.socialRoutes, data);

interface PatchProps {
  id: number;
  type: string;
  link: string;
}
export const editSocialRoute = (
  data: PatchProps
): Promise<AxiosResponse<SocialRoute[]>> =>
  api.patch(endPonints.socialRoutes, data);

export const deleteSocialRoute = (data: {
  id: number;
}): Promise<AxiosResponse<SocialRoute[]>> =>
  api.delete(`${endPonints.socialRoutes}?id=${data.id}`);

export const getSocialRoute = (): Promise<AxiosResponse<SocialRoute[]>> =>
  api.get(endPonints.socialRoutes);
