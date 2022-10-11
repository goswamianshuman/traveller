import React from "react";
import Container from "./container";

export default function SectionTitle(props) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-trueGray-900 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}
      {props.pretitle && (
        <div className="text-sm max-w-4xl mt-3 font-bold tracking-wider text-[#ff7300] uppercase">
          {props.pretitle}
        </div>
      )}
      {props.children && (
        <p className="max-w-7xl py-4 text-lg leading-normal text-trueGray-600 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}
