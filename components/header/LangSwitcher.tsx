"use client";
import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import { i18n } from "@/i18n/i18n-confige";
import MountedClient from "../shared/Mounted";

export default function LangSwitcher() {
  const { locales } = i18n;
  const locale = useLocale();
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MountedClient>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          border: "1px solid white",
          color: "white",
          width: 44,
          height: 44,
        }}
        className="!text-black"
        aria-controls={open ? "lang-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <LanguageIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="lang-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 2,
          sx: {
            width: 200,
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {locales.map((c) => (
          <MenuItem
            key={c.code}
            component={Link}
            href={pathname}
            locale={c.code}
            selected={locale === c.code}
          >
            <ListItemIcon>{c.icon}</ListItemIcon>
            <ListItemText primary={c.name} />
          </MenuItem>
        ))}
      </Menu>
    </MountedClient>
  );
}
