import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
const Card = ({ card, info }) => {
  console.log(card);

  return (
    <div>
      <Link href="/posts/[id]" as={`/posts/${card.id}`}>
        <ImageList sx={{ display: "flex", gap: "5rem" }}>
          <ImageListItem key="Subheader" cols={2}>
            {/* <ListSubheader component="div">December</ListSubheader> */}
          </ImageListItem>

          <ImageListItem sx={{ width: "300px" }}>
            <img
              src={`${card.image}?w=248&fit=crop&auto=format`}
              srcSet={`${card.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
            <ImageListItemBar
              title={card.location.name}
              subtitle={card.species}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${card.name}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        </ImageList>
      </Link>
    </div>
  );
};

export default Card;
