import React from "react";
import { Tabs, Tab } from "@mui/material";
import { tab_Style } from "./style";

export const SelectedTab = (props) => {
  const { list = [], tabIndex, handleTabChange } = props;
  return (
    <Tabs
      value={tabIndex}
      onChange={handleTabChange}
      sx={{
        ...tab_Style?.rootSx,
      }}
    >
      {list?.length > 0 &&
        list?.map((val) => {
          return <Tab label={`${val?.title} (${val?.count})`} />;
        })}
    </Tabs>
  );
};
