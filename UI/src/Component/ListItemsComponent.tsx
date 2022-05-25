import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BarChartIcon from "@material-ui/icons/BarChart";

export const mainListItems = (cb) => (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon onClick={() => cb("Dashboard")} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" onClick={() => cb("Dashboard")} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon onClick={() => cb("Orders")} />
      </ListItemIcon>
      <ListItemText primary="Orders" onClick={() => cb("Orders")} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon onClick={() => cb("Reports")} />
      </ListItemIcon>
      <ListItemText primary="Reports" onClick={() => cb("Reports")} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon onClick={() => cb("Sale")} />
      </ListItemIcon>
      <ListItemText primary="Sale" onClick={() => cb("Sale")} />
    </ListItem>
  </div>
);
