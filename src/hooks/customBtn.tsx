import React from "react";
import { Button } from "antd";

const AnimatedButton = ({ children, ...props }: any) => {
  return (
    <Button {...props} className={`animated-btn ${props.className || ""}`}>
      <span className="btn-content">{children}</span>
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className="btn-animation-span"
          style={{ "--n": i + 1 } as React.CSSProperties}
        />
      ))}
    </Button>
  );
};

export default AnimatedButton;
