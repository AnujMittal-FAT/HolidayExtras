import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export default {
  pharmacy: [
    {
      _tag: "CSidebarNavItem",
      name: <span className="sidebar-name">FlickrPhotoStream</span>,
      to: "/FlickrPhotoStream",
      icon: (
        <span className="sidebar-bumper">
          <FontAwesomeIcon icon={faLayerGroup} />
        </span>
      ),
    },
  ],
};
