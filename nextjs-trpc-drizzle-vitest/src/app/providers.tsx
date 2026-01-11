import { TRPCProvider } from "@/client/trpc/client";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <TRPCProvider>{children}</TRPCProvider>;
}
