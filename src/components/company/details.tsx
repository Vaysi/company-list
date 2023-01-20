import { ArrowBack, Groups, Info, Public } from "@mui/icons-material";
import { AppBar, Dialog, IconButton, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";

import { Company } from "../../types";

import EmployeeTab from "./tabs/employees";
import InfoTab from "./tabs/info";
import SocialTab from "./tabs/social";

interface Props {
  selectedCompany: Company | null;
  setSelectedCompany: any;
}

function Details({ selectedCompany, setSelectedCompany }: Props) {
  const [tab, setTab] = useState("info");
  return (
    <Dialog open={selectedCompany !== null} onClose={() => setSelectedCompany(null)} fullScreen>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setSelectedCompany(null)}>
            <ArrowBack sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {selectedCompany?.["Company Name"]}
          </Typography>
        </Toolbar>
      </AppBar>
      <Tabs
        variant={"fullWidth"}
        centered
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        aria-label="icon label tabs example"
      >
        <Tab icon={<Info />} label="General" value={"info"} sx={{ textTransform: "capitalize" }} />
        <Tab
          icon={<Groups />}
          label="Employees"
          value={"employee"}
          sx={{ textTransform: "capitalize" }}
        />
        <Tab
          icon={<Public />}
          label="Social Media"
          value={"media"}
          sx={{ textTransform: "capitalize" }}
        />
      </Tabs>
      {tab === "info" ? <InfoTab selectedCompany={selectedCompany} /> : null}
      {tab === "employee" ? <EmployeeTab selectedCompany={selectedCompany} /> : null}
      {tab === "media" ? <SocialTab selectedCompany={selectedCompany} /> : null}
    </Dialog>
  );
}

export default Details;
