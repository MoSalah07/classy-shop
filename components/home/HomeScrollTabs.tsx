"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTranslations } from "next-intl";
import { Home_TABS } from "@/constant/data";

export default function HomeScrollTabs() {
  const [value, setValue] = React.useState<number>(0);
  const t = useTranslations("header");
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: 220, sm: 480, md: 600 },
        bgcolor: "background.paper",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {Home_TABS.map((tab, idx) => (
          <Tab key={idx + 1} label={t(tab.title)} />
        ))}
      </Tabs>
    </Box>
  );
}
