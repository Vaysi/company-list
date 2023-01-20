import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import { Company } from "../types";
import { companiesContext } from "../utils/context";

import Filters from "./company/Filters";
import Details from "./company/details";
import Item from "./company/item";

const perPage = 8;

function Companies() {
  const { companies: data } = useContext(companiesContext);
  const [filteredData, setFilteredData] = useState(data);
  const [page, setPage] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const loadMoreItems = () => {
    setPage(page + 1);
  };

  const fromItem = page * perPage;
  const toItem = fromItem + perPage;
  const hasMore = toItem < (filteredData?.length ?? 0);

  const loadingIcon = (
    <Grid item xs={12} sx={{ textAlign: "center" }}>
      <CircularProgress size={40} color={"secondary"} />
    </Grid>
  );
  return (
    <Box sx={{ flexGrow: 1, my: 4 }}>
      <Filters data={data} setFilteredData={setFilteredData} />
      <InfiniteScroll pageStart={0} loadMore={loadMoreItems} hasMore={hasMore} loader={loadingIcon}>
        <Grid container>
          {filteredData.length > 0
            ? filteredData
                ?.slice(0, toItem)
                .map((item: Company, index) => (
                  <Item item={item} key={index} setSelectedCompany={setSelectedCompany} />
                ))
            : null}
        </Grid>
      </InfiniteScroll>
      <Details selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />
    </Box>
  );
}

export default Companies;
