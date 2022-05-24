import React from "react";
import SocialRoute from "models/SocialRoute.model";
import { SocialRoute as SocialRouteItem } from "components/items";

type Props = { socialRoutes: SocialRoute[] };

const SocialRoutes = (props: Props) => {
  return (
    <>
      {props.socialRoutes.map((socialRoute) => (
        <SocialRouteItem key={socialRoute.id} socialRoute={socialRoute} />
      ))}
    </>
  );
};

export default SocialRoutes;
