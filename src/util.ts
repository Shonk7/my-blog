import { GRAD_DATE } from "./data";
export const daysToGrad = () => Math.max(0, Math.ceil((GRAD_DATE.getTime() - Date.now()) / 864e5));
