import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { EvacuationProgress } from "../types";
import { evacuationRoutes } from "../data";

const useSimulation = (simulationMode: boolean, setEvacuationProgress: Dispatch<SetStateAction<EvacuationProgress>>) => {
  useEffect(() => {
    if (simulationMode) {
      const interval = setInterval(() => {
        setEvacuationProgress((prev) => {
          const newProgress = { ...prev };
          evacuationRoutes.forEach((route) => {
            if (route.status !== "blocked") {
              newProgress[route.id] = Math.min((newProgress[route.id] || 0) + 2, 100);
            }
          });
          return newProgress;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [simulationMode]);
};

export default useSimulation;
