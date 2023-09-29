import { IconProps } from "@/types/IconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/Spinner";
import { LinkType } from "@/lib/LinkType";
import Link from "next/link";

interface Props  {
size?: "small" | "medium" | "large";
variant?: "accent" | "secondary" | "outline" | "disabled" | "ico";
icon?: IconProps;
iconTheme?: "accent" | "secondary" | "gray";
iconPosition?: "left" | "right";
disabled?: boolean;
isLoading?: boolean;
children?: React.ReactNode;
baseUrl?: string,
linkType?: LinkType,
action?: Function,

}

export const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    isLoading,
    children,
    baseUrl,
    linkType = "internal",
    action = () => {},
}: Props) => {

    let sizeStyles: string = "",
        variantStyles: string = "",
        icoSize: number = 0;
    
    switch (variant) {
        case "accent": //DEFAULT
            variantStyles = 
                "bg-primary hover:bg-primary-400 text-white rounded";
            break;
        case "secondary":
            variantStyles = 
                "bg-primary-200/20 hover:bg-primary-300/50 text-primary rounded";
            break;
        case "outline":
            variantStyles = 
                "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
            break;
        case "disabled":
            variantStyles = 
                "bg-gray-400 border border border-gray-500 text-gray-600 rounded cursor-not-allowed";
            break;
        case "ico":
            if (iconTheme === "accent") //DEFAULT
                variantStyles = 
                    "bg-primary hover:bg-primary-400 text-white rounded-full";
            if (iconTheme === "secondary")
                variantStyles =
                    "bg-primary-200/20 hover:bg-primary-300/50 text-primary rounded-full";
            if (iconTheme === "gray")
                variantStyles =
                    "bg-gray-800 hover:bg-gray-700 text-white rounded-full"
            break;
    }

    switch (size) { 
        case "small":
            sizeStyles = 
                `text-caption3 medium ${variant === "ico" ? "w-[40px] h-[40px] flex items-center justify-center" : "px-[14px] py-[12px]"}`;
            icoSize = 18;
            break;
        case "medium": //DEFAULT
            sizeStyles = 
                `text-caption2 medium ${variant === "ico" ? "w-[50px] h-[50px] flex items-center justify-center" : "px-[18px] py-[15px]"}`;
            icoSize = 20;
            break;
        case "large":
            sizeStyles = 
                `text-caption1 medium ${variant === "ico" ? "w-[60px] h-[60px] flex items-center justify-center" : "px-[22px] py-[18px]"}`;
            icoSize = 24;
            break;
    }

    const handleClick = () => {
        if (action) {
            action()
        }
    }

    const buttonContent = (
        <>
            {isLoading && (

                <div className="absolute flex inset-0 items-center justify-center">
                    {variant === "accent" || variant === "ico" ?
                        (<Spinner variant={"white"} size={"small"} />):
                        (<Spinner size={"small"} />)
                    }
                </div>

            )}

            <div className={clsx(isLoading && "invisible")}>
            {icon && variant === "ico" ? (
                <icon.icon size={icoSize} />
            ) : 
            (
                <div className={clsx(icon && "flex items-center gap-1")}>
                    {icon && iconPosition === "left" && (<icon.icon size={icoSize} />)}
                    {children}
                    {icon && iconPosition === "right" && (<icon.icon size={icoSize} />)}
                </div>
            )}
            </div>
        </>
    )

    const buttonElement = (
        <button
            type="button"
            onClick={() => handleClick()}

            className={clsx(
                sizeStyles, 
                variantStyles,
                isLoading && "cursor-wait", 
                "relative animate"
            )}
            disabled={disabled}
        >
            {buttonContent}
        </button>
    )

    if (baseUrl) {
        if (linkType === LinkType.EXTERNAL) {
            return (
                <a href={baseUrl} target={"_blank"}>
                    {buttonElement}
                </a>
            )
        } else {
            return <Link href={baseUrl}>{buttonElement}</Link>
        }
    }

    return buttonElement
}