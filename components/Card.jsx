import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ card, info }) => {
  console.log(card.id);
  return (
    <div>
      <Link href="/posts/[id]" as={`/posts/${card.id}`}>
        <div>
          <img src={card.image} alt="ricky" layout="fill" />
        </div>
      </Link>

      <div>
        <p>{card.name}</p>
      </div>
    </div>
  );
};

export default Card;
