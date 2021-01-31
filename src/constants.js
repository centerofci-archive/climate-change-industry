import React from "react";
import rawData from "./data.json";
import { fromPairs } from "./utils";

export const types = ["Interventions", "Investments", "Actors"];

const getContributionArea = (d) => {
  return [
    ...new Set(d["Topical Contribution Area"].map((d) => d.split(":")[0])),
  ].sort();
  // .join(" & ");
};
export const data = fromPairs(
  types.map((type) => [
    type,
    rawData[type].map((d) => ({
      ...d,
      mainContributionArea: d["Topical Contribution Area"]
        ? getContributionArea(d)
        : null,
    })),
  ])
);

const colors = ["#4d405a", "#4d405a", "#4d405a", "#4d405a"];

let typeColors = {};
types.forEach((type, i) => {
  typeColors[type] = colors[i % colors.length];
});
export { typeColors };

export const contributionAreas = ["Mitigation", "Geoengineering"];
// const contributionAreaColorsList = ["#89b792", "#4d405a", "#F79F1F"];
const contributionAreaColorsList = [
  "var(--accent-2)",
  "var(--accent-3)",
  "#F79F1F",
];
let contributionAreaColors = {};
contributionAreas.forEach((contributionArea, i) => {
  contributionAreaColors[contributionArea] =
    contributionAreaColorsList[i % colors.length];
});
export { contributionAreaColors };

export const statusColors = {
  Active: "#89b792",
};

export const fieldLabels = {
  mainContributionArea: "Main contribution area",
};

export const typeShapes = {
  Interventions: (
    <g transform="translate(-50, -50)">
      {/* <path d="M78.4,37.6l-3.1,3.1c2.2,4.5,3.4,9.6,3.4,15c0,19-15.4,34.4-34.4,34.4C25.5,90,10,74.6,10,55.6c0-19,15.4-34.4,34.4-34.4     c5.4,0,10.4,1.2,14.9,3.4l3.1-3.1v-3.8c-5.5-2.6-11.6-4.1-18-4.1c-23.1,0-41.9,18.8-41.9,41.9c0,23.1,18.8,41.9,41.9,41.9     c23.1,0,41.9-18.8,41.9-41.9c0-6.4-1.5-12.5-4.1-18H78.4z" />
      <path d="M44.4,36.7c0.9,0,1.8,0.1,2.7,0.2l6.2-6.2c-2.8-1.1-5.7-1.6-8.9-1.6C29.8,29.2,18,41,18,55.6c0,14.6,11.8,26.5,26.5,26.5     c14.6,0,26.5-11.9,26.5-26.5c0-3.1-0.6-6.1-1.6-8.9l-6.2,6.2c0.2,0.9,0.2,1.8,0.2,2.7c0,10.4-8.5,18.9-18.9,18.9     C34,74.5,25.5,66,25.5,55.6S34,36.7,44.4,36.7z" />
      <path d="M97.3,16.7c-0.4-1.1-1.5-1.7-2.6-1.7h-9.6V5.3c0-1.1-0.7-2.2-1.7-2.6c-1.1-0.4-2.3-0.2-3.1,0.6l-9.5,9.5     c-0.5,0.5-0.8,1.2-0.8,2v9.9L49,45.6c-1.4-0.7-3-1.1-4.6-1.1c-6.1,0-11,4.9-11,11s4.9,11,11,11s11-4.9,11-11     c0-1.7-0.4-3.2-1.1-4.6L75.3,30h9.9c0.7,0,1.5-0.3,2-0.8l9.5-9.5C97.5,18.9,97.7,17.7,97.3,16.7z" /> */}
      <path d="M50,5C25.2,5,5,25.2,5,50s20.2,45,45,45s45-20.2,45-45S74.8,5,50,5z M50,85c-19.3,0-35-15.7-35-35s15.7-35,35-35   s35,15.7,35,35S69.3,85,50,85z" />
      <path d="M50,20c-16.5,0-30,13.5-30,30s13.5,30,30,30s30-13.5,30-30S66.5,20,50,20z M50,70c-11,0-20-9-20-20s9-20,20-20s20,9,20,20   S61,70,50,70z" />
      <path d="M50,35c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15S58.3,35,50,35z M50,55c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5   S52.8,55,50,55z" />
    </g>
  ),
  Investments: (
    <g transform="translate(-50, -50)">
      <path d="M68.27,28.08H31.73S6.15,50,6.15,75.58c0,14.61,11,21.92,18.27,21.92H75.58c7.3,0,18.27-7.31,18.27-21.92C93.85,50,68.27,28.08,68.27,28.08ZM53.65,78.86v5.85h-7.3V78.88c-5.38-1-8.76-4.32-9-9.14h6.33c.31,2.53,2.86,4.16,6.55,4.16,3.4,0,5.81-1.65,5.81-4,0-2-1.56-3.14-5.4-4l-4.07-.87c-5.7-1.19-8.5-4.16-8.5-8.93s3.18-8.21,8.24-9.34V40.87h7.3v5.9c4.94,1.1,8.23,4.47,8.39,9H55.89c-.31-2.47-2.61-4.12-5.77-4.12s-5.44,1.52-5.44,3.9c0,1.93,1.49,3,5.16,3.82l3.77.8c6.29,1.32,9,4,9,8.89C62.61,74.29,59.25,77.79,53.65,78.86Z" />
      <path d="M68.27,6.15H58.17a11,11,0,0,0-16.34,0H31.73a3.66,3.66,0,0,0-3.39,5l3.39,9.61H68.27l3.39-9.61A3.66,3.66,0,0,0,68.27,6.15Z" />
    </g>
  ),
  Actors: (
    <g transform="translate(-50, -50)">
      <circle cx="47.5" cy="30.028" r="22.623" />
      <path d="M68.213,49.752c-5.217,5.477-12.57,8.898-20.713,8.898s-15.496-3.422-20.713-8.898c-8.004,3.217-13.162,8.25-13.162,13.911   c0,9.712,15.166,23.932,33.875,23.932s33.875-14.22,33.875-23.932C81.375,58.002,76.217,52.969,68.213,49.752z" />
    </g>
  ),
  Organizations: (
    <g style={{ transform: "scale(4) translate(-12.5px, -12.5px)" }}>
      <path d="M18,22 L22,22 L22,13 L18,13 L18,22 Z M13,10 L11,10 C10.447,10 10,9.552 10,9 C10,8.448 10.447,8 11,8 L13,8 C13.553,8 14,8.448 14,9 C14,9.552 13.553,10 13,10 L13,10 Z M13,14 L11,14 C10.447,14 10,13.552 10,13 C10,12.448 10.447,12 11,12 L13,12 C13.553,12 14,12.448 14,13 C14,13.552 13.553,14 13,14 L13,14 Z M13,18 L11,18 C10.447,18 10,17.552 10,17 C10,16.448 10.447,16 11,16 L13,16 C13.553,16 14,16.448 14,17 C14,17.552 13.553,18 13,18 L13,18 Z M2,22 L6,22 L6,8 L2,8 L2,22 Z M23,11 L22,11 L22,9 C22,8.448 21.553,8 21,8 C20.447,8 20,8.448 20,9 L20,11 L18,11 L18,4 C18,3.448 17.553,3 17,3 L13,3 L13,1 C13,0.448 12.553,0 12,0 C11.447,0 11,0.448 11,1 L11,3 L7,3 C6.447,3 6,3.448 6,4 L6,6 L4,6 L4,4 C4,3.448 3.553,3 3,3 C2.447,3 2,3.448 2,4 L2,6 L1,6 C0.447,6 0,6.448 0,7 L0,23 C0,23.552 0.447,24 1,24 L7,24 L17,24 L23,24 C23.553,24 24,23.552 24,23 L24,12 C24,11.448 23.553,11 23,11 L23,11 Z" />
    </g>
  ),
  Regulations: (
    <g transform="translate(-50, -50)">
      <circle cx="50" cy="50" r="50" />
    </g>
  ),
};
