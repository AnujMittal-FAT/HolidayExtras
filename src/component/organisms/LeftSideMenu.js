import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarNav,
  CSidebarNavItem,
} from "@coreui/react";

import { ReactComponent as DashboardIcon } from "../../assets/icons/DashboardIcon.svg";
import * as actionTypes from "../../store/actions";

// sidebar nav config
import navigation from "./_nav";

const LeftSideMenu = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sbs.sidebarShow);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) =>
        dispatch({ type: actionTypes.SET, sidebarShow: val })
      }
    >
      <CSidebarNav className="shadow-sm">
        <div className="flex-top">
          <CSidebarNavItem
            tag="CSidebarNavItem"
            name={<span className="sidebar-name">Dashboard</span>}
            to="/dashboard"
            icon={
              <span className="sidebar-bumper">
                <DashboardIcon />
              </span>
            }
          />
        </div>
        <div className="flex-central">
          <CCreateElement
            items={navigation["pharmacy"]}
            components={{ CSidebarNavItem }}
          />
        </div>
        <div className="flex-bottom">
          <CCreateElement
            items={navigation["bottom"]}
            components={{ CSidebarNavItem }}
          />
        </div>
      </CSidebarNav>
    </CSidebar>
  );
};
export default React.memo(LeftSideMenu);
