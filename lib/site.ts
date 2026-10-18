export const WHATSAPP = "5571993150073";
export const INSTAGRAM = "https://www.instagram.com/lafvidros/";

export function wa(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const MSG = {
  geral: "Olá, LAF Vidros! Gostaria de solicitar um orçamento.",
  box: "Olá, LAF Vidros! Quero orçamento para box de vidro.",
  janela: "Olá, LAF Vidros! Quero orçamento para janela de vidro.",
  vitrine: "Olá, LAF Vidros! Quero orçamento para vitrine.",
  espelho: "Olá, LAF Vidros! Quero orçamento para espelho.",
  manutencao: "Olá, LAF Vidros! Preciso de manutenção no meu box de vidro.",
};
