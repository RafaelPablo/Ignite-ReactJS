import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>$79.90</span>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam temporibus porro repellat, obcaecati amet pariatur nostrum esse assumenda aliquam non facere, facilis minus aut rerum ipsum velit tenetur veritatis dolores!</p>

        <button>
          Buy
        </button>
      </ProductDetails>
    </ProductContainer>  
  )
}