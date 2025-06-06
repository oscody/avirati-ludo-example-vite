import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./main.css";
import { Ludo } from "./Ludo";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Ludo />
  </StrictMode>,
)
