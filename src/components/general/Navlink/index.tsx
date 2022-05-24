import Link from "next/link";
import React from "react";
import { useAppSelector } from "store";
import { useRouter } from "next/router";

interface Props {
  title: string;
  to: string;
  className?: string;
}

const Navlink = (props: Props) => {
  const { pathname } = useRouter();
  const { theme } = useAppSelector((s) => s.settings);
  return (
    <Link href={props.to}>
      <p
        style={{ color: pathname === props.to ? theme.color : "inherit" }}
        className={`cursor-pointer ${props.className}`}>
        {props.title}
      </p>
    </Link>
  );
};

export default Navlink;
