export const projects = [
  {
    id: "platform",
    number: "01",
    company: "TENSORPLEX LABS",
    title: "One infrastructure engineer. Three products.",
    summary:
      "I owned infrastructure across Backprop Finance, Tensorplex Stake, and Dojo as the sole infrastructure engineer.",
  },
  {
    id: "isolation",
    number: "02",
    company: "HOMESWIFT.AI",
    title: "AI workloads. Isolated by design.",
    summary:
      "I configured EKS nodes and deployed Kata Containers with Firecracker microVMs for live coding agents.",
  },
] as const;

export type ProjectId = (typeof projects)[number]["id"];
