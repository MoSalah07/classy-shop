import { Button, FormControlLabel, Checkbox } from "@mui/material";
import React from "react";
import FooterHeading from "./FooterHeading";

export default function FooterFormSubscribe() {
  return (
    <div className="flex flex-col gap-y-4">
      <FooterHeading title="Subscribe to newsletter" />
      <p className="text-subtext-primary text-sm font-medium">
        Subscribe to our latest newsletter to get news about special discounts.
      </p>
      <form className="flex flex-col gap-y-4">
        <input
          type="text"
          className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm focus:border-primary"
          placeholder="Your Email Address"
        />
        <Button className="!uppercase !text-white !bg-primary !w-[120px]">
          subscribe
        </Button>

        <FormControlLabel
          sx={{
            color: "#6a7282",
            "& .MuiFormControlLabel-label": {
              color: "#6a7282",
              fontSize: ".8rem",
              fontWeight: 500,
            },
            gap: "6px",
          }}
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: "#ff5252",
                "&.Mui-checked": {
                  color: "#ff5252",
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 87, 34, 0.08)",
                },
              }}
            />
          }
          label="I agree to the terms and conditions and the privacy policy"
        />
      </form>
    </div>
  );
}
