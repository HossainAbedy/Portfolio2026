import ZoneDiagram from "./ZoneDiagram";
import SecurityStack from "./SecurityStack";
import ComplianceMatrix from "./ComplianceMatrix";
import RoadmapTimeline from "./RoadmapTimeline";
import BranchTopology from "./BranchTopology";

export default function CyberArchitecturePanel({project}){

return(
        <div className="space-y-8">
            <ZoneDiagram/>
            <SecurityStack/>
            <ComplianceMatrix/>
            <BranchTopology/>
            <RoadmapTimeline/>
        </div>
    );
}