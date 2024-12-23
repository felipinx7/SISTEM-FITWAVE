import ScrollReveal from "scrollreveal";

export const scrollConfig = {
  origin: "left",
  distance: "600px",
  duration: 1000,
  delay: 0,
  reset: true,
};

export const scrollConfigRight = {
  origin: "right",
  distance: "600px",
  duration: 1000,
  delay: 0,
  reset: true,
};

const sr = ScrollReveal();

sr.reveal(".classe-esquerda", scrollConfig);
sr.reveal(".classe-direita", scrollConfigRight);
