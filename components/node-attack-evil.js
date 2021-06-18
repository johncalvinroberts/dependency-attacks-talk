import React from "react";

export const NodeAttackEvil = () => {
  return (
    <>
      <div style={{ display: "flex", fontSize: "80px" }}>
        <svg
          width="80"
          height="100"
          viewBox="0 0 45 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: "40px" }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.3 0.3C22 -0.1 23 -0.1 23.7 0.3L43.8 11.9C44.6 12.3 45 13.1 45 14V37.2C45 38.1 44.5 38.9 43.8 39.3L23.7 50.9C22.9 51.3 22 51.3 21.3 50.9L1.2 39.3C0.500001 38.9 0 38.1 0 37.2V14C0 13.1 0.500001 12.3 1.2 11.9L21.3 0.3Z"
            fill="#80BD01"
          />
        </svg>
        + 💉 = 💀
      </div>
      <p>By John.</p>
    </>
  );
};

export const NodeAttackEvilSmall = () => {
  return <div style={{ fontSize: "120px" }}>💀</div>;
};

export default NodeAttackEvil;
