import { useAppConfig } from "#app";

export function useDemo() {
  const config = useAppConfig()
  return config;
}
