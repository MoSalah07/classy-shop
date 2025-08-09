import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import ProductItemImageActionSlider from "./ProductItemImageActionSlider";

export default function ProductItemSlider() {
  return (
    <Card
      sx={{
        maxWidth: 345,

        position: "relative",
        backgroundColor: "#rgb(247,247,247)",

        borderRadius: "8px",
      }}
      className="!shadow-lg"
    >
      {/* Image & ActionsBtn */}
      <ProductItemImageActionSlider />
      {/* Content */}
      <CardContent>
        <Link
          href={`/`}
          className="text-gray-500 transition-colors hover:text-primary"
        >
          <Typography
            className="font-bold !text-[13px] "
            gutterBottom
            variant="h5"
            component="div"
          >
            Lizard
          </Typography>
        </Link>
        <Link
          href={`/`}
          className="text-gray-500 transition-colors hover:text-primary"
        >
          <Typography
            variant="body2"
            className="!text-sm !mt-1 !font-medium !text-[rgba(0,0,0,0.9)] leading-6 truncate"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Link>
        <Rating name="simple-controlled" value={5} size="small" readOnly />
        <div className="flex-between">
          <span className="line-through text-[15px] font-medium text-gray-500">
            $85.00
          </span>
          <span className="text-primary text-[15px] font-semibold">$55.00</span>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
