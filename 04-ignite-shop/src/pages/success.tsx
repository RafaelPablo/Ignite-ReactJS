import Link from "next/link";
import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";

export default function Success(){
    return (
        <SuccessContainer>
            <h1>Purchase made!</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Yeah <strong>Rafael Pablo</strong>, your <strong>t-shirt X </strong> is already on its way to your house.
            </p>

            <Link href="">
                Back to catalog
            </Link>
        </SuccessContainer>
    )
}