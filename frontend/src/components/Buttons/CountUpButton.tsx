// --- ここから追加 ---
import React from "react";
import { Props } from "./CountDownButton"
// style
import { RoundButton } from "../shared_style";

export const CountUpButton: React.FC<Props>  = ({ onClick, disabled }) => (
  <RoundButton onClick={onClick} disabled={disabled}>
    ＋
  </RoundButton>
);
// --- ここまで追加 ---
