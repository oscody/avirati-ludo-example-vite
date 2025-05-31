import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import { Ludo } from "./Ludo";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Ludo />
  </StrictMode>,
)
