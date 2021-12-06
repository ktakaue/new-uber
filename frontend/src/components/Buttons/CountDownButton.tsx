// --- ここから追加 ---
import React from "react";

// style
import { RoundButton } from "../shared_style";

export interface Props  {
  onClick: () =>  React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}


export const CountDownButton: React.FC<Props>  = ({ onClick, disabled }) => (
  <RoundButton onClick={onClick} disabled={disabled}>
    ー
  </RoundButton>
);
// --- ここまで追加 ---
