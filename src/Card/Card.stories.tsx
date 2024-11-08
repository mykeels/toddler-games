import Container from "@/Container";
import Card from "./index";

export default {
    title: "components/Card",
    component: Card,
};

export const IsCorrect = () => <Card
    name="test"
    onClick={() => { }}
    value="A"
    selectedValue="A">
    A
</Card>;

export const IsWrong = () => <Card
    name="test"
    onClick={() => { }}
    value="A"
    selectedValue="B">
    A
</Card>;

export const Multi = () => <Container>
    <Card
        name="test"
        onClick={() => { }}
        value="A"
        selectedValue="B">
        A
    </Card>
    <Card
        name="test"
        onClick={() => { }}
        value="B"
        selectedValue="B">
        B
    </Card>
</Container>;