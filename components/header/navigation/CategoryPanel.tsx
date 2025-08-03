"use client";
import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { NAVIGATION_LINKS } from "@/constant/data";
import CategoryLinks from "./CategoryLinks";

interface Props {
  open: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function CategoryPanel({ open, toggleDrawer }: Props) {
  const [openRootTitle, setOpenRootTitle] = useState<string | null>(null);

  const DrawerList = (
    <Box sx={{ width: 250, px: 2, py: 1 }} role="presentation">
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="body2" sx={{ fontSize: "1rem" }}>
          Shop By Categories
        </Typography>
        <IconButton
          size="small"
          aria-label="close"
          onClick={toggleDrawer(false)}
        >
          <CloseIcon />
        </IconButton>
      </Stack>

      <ul className="w-full mt-2">
        {NAVIGATION_LINKS.filter((link) => link.title !== "home").map(
          (link, idx) => (
            <CategoryLinks
              key={idx}
              link={link}
              isOpen={openRootTitle === link.title}
              onToggle={() =>
                setOpenRootTitle((prev) =>
                  prev === link.title ? null : link.title
                )
              }
            />
          )
        )}
      </ul>
    </Box>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
