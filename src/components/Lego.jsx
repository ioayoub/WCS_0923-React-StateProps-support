import { useState } from "react";

function Lego({ width, height, backgroundColor }) {
  const [newColor, setNewColor] = useState(backgroundColor);
  const [newWidth, setNewWidth] = useState(width);

  return (
    <div
      style={{
        width: `${newWidth}em`,
        height: `${height}em`,
        backgroundColor: newColor,
        margin: "1em",
      }}
      onClick={() => setNewWidth(newWidth + 1)}
    >
      <input type="text" onChange={(e) => setNewColor(e.target.value)} />
    </div>
  );
}

export default Lego;
