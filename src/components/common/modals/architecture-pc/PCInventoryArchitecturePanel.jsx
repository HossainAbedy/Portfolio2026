import ScanPipeline from "./ScanPipeline";
import RiskEngine from "./RiskEngine";
import TechStackBreakdown from "./TechStackBreakdown";
import DataFlowDiagram from "./DataFlowDiagram";
import DeploymentMetrics from "./DeploymentMetrics";

export default function PCInventoryArchitecturePanel({ project }) {
  return (
    <div className="space-y-8">
      <DeploymentMetrics />
      <ScanPipeline />
      <RiskEngine />
      <TechStackBreakdown />
      <DataFlowDiagram />
    </div>
  );
}
