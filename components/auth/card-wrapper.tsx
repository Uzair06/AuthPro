"use client";

import { 
    Card, 
 CardContent,
 CardFooter,
 CardHeader
} from "../ui/card";

interface CardWrapperProps {
    children:React.ReactNode;
    headerLabel:string;
    backbuttonLabel:string;
    backbuttonHref: string;
    showsocial?: boolean;
};
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "./back-button";

export const CardWrapper = ({
    children,
    headerLabel,
    backbuttonLabel,
    backbuttonHref,
    showsocial
}: CardWrapperProps) => {
    return(
    <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label={headerLabel}></Header>
        </CardHeader>
        <CardContent>
        {children}
        </CardContent>
        {showsocial&& (
            <CardFooter>
                <Social></Social>
            </CardFooter>)}
            <CardFooter>
                <BackButton
                href={backbuttonHref}
                label={backbuttonLabel}>

                </BackButton>
                </CardFooter>
    </Card>
    );
}