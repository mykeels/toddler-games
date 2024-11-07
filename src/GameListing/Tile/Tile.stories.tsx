import Container from "@/Container";
import { Tile } from "./index";

export default {
    title: "components/GameListing/Tile",
    component: Tile,
};

export const Index = () => <Container>
    <div className="flex flex-wrap items-center justify-center gap-4">
        <Tile title="Find and Tap" imageSourcePath="./icons/tap.svg" />
        <Tile title="Tap to Count" imageSourcePath="./icons/1234.svg" />
        <Tile title="Trace Letters" imageSourcePath="./icons/trace.svg" />
    </div>
</Container>;