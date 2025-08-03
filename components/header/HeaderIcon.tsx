import React, { ReactNode } from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

interface HeaderIconProps {
  title: string;
  icon: ReactNode;
  count?: number;
  tooltipOffset?: [number, number];
  ariaLabel: string;
  isCount?: boolean;
}

export default function HeaderIcon({
  title,
  icon,
  count = 0,
  tooltipOffset = [0, 0],
  ariaLabel,
  isCount = false,
}: HeaderIconProps) {
  return (
    <Tooltip
      title={title}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: tooltipOffset,
              },
            },
          ],
        },
      }}
    >
      <IconButton aria-label={ariaLabel}>
        {isCount ? (
          <StyledBadge badgeContent={count} color="secondary">
            {icon}
          </StyledBadge>
        ) : (
          icon
        )}
      </IconButton>
    </Tooltip>
  );
}
