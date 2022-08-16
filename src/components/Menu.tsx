import { Button } from "./Button";

type Props = {
    setFree: React.Dispatch<React.SetStateAction<boolean>>;
};
export function Menu({ setFree }: Props) {
    return (
        <menu>
            <Button
                onClick={() => {
                    setFree(true);
                }}
            >
                "Finished HomeWork"
            </Button>
            <Button
                onClick={() => {
                    setFree(false);
                }}
            >
                " Want a Candy"
            </Button>
        </menu>
    );
}
