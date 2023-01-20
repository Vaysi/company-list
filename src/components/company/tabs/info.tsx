import { Construction, Groups, Help, LocationOn, Paid } from "@mui/icons-material";
import { Box, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

import { Company } from "../../../types";

function InfoTab({ selectedCompany }: { selectedCompany: Company | null }) {
  return (
    <Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Help />
          </ListItemAvatar>
          <ListItemText primary={"Description"} secondary={selectedCompany?.Description} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Construction />
          </ListItemAvatar>
          <ListItemText primary={"Industry"} secondary={selectedCompany?.Industry} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <LocationOn />
          </ListItemAvatar>
          <ListItemText primary={"HQ Location"} secondary={selectedCompany?.["HQ Location"]} />
        </ListItem>
        <Divider variant="inset" component="li" />
        {selectedCompany?.["Total Funding Amount (in USD)"] ? (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Paid />
              </ListItemAvatar>
              <ListItemText
                primary={`Total Funding Amount (${selectedCompany["Number of Funding Rounds"]} Rounds)`}
                secondary={selectedCompany?.["Total Funding Amount (in USD)"].toLocaleString(
                  "en-US"
                )}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ) : null}
        {selectedCompany?.["Last Funding Amount (in USD)"] ? (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Paid />
              </ListItemAvatar>
              <ListItemText
                primary={`Last Funding Amount in ${selectedCompany?.["Last Funding Date"]}`}
                secondary={`${selectedCompany?.["Last Funding Amount (in USD)"].toLocaleString(
                  "en-US"
                )} (Type: ${selectedCompany["Last Funding Type"]})`}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ) : null}
        {selectedCompany?.["Founders"] ? (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Groups />
              </ListItemAvatar>
              <ListItemText primary={`Founders`} secondary={`${selectedCompany?.["Founders"]}`} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ) : null}
        {selectedCompany?.["Investors"] ? (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Groups />
              </ListItemAvatar>
              <ListItemText primary={`Investors`} secondary={`${selectedCompany?.["Investors"]}`} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ) : null}
      </List>
    </Box>
  );
}

export default InfoTab;
