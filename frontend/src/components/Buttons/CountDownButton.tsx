// --- ここから追加 ---
import React from "react";

// style
import { RoundButton } from "../shared_style";

// interface Props  {
//   onClick: (event: React.MouseEvent<HTMLInputElement>) => void
// }

export const CountDownButton  = ({ onClick, isDisabled }) => (
  <RoundButton onClick={onClick} disabled={isDisabled}>
    ー
  </RoundButton>
);
// --- ここまで追加 ---
