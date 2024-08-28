import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
    return(
        <CardWrapper
        headerLabel="Oops! Something went wrong!"
        backbuttonHref="/auth/login"
        backbuttonLabel="Back to Login"
        >
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive"/>
            </div>
        </CardWrapper>
    );
};