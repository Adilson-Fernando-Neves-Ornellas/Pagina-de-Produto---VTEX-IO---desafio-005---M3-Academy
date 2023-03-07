import React from "react";
import { useProduct } from "vtex.product-context";

// import { useCssHandles } from "vtex.css-handles";

import styles from "./styles.css";

const pixCustom = () => {
  const productContextValue = useProduct();

  // {productContextValue?.product?.priceRange.sellingPrice.highPrice}

  const valorString =
    productContextValue?.product?.priceRange.sellingPrice.lowPrice;

  const valorNumber = Number(valorString);

  const desconto = 0.9;
<div>…</div>
  var pix = (valorNumber * desconto).toFixed(2).replace(".", ",");

  console.log(pix);

  // const CSS_HANDLES = [
  //   "divConteiner",
  //   "divImg",
  //   "img",
  //   "divText",
  //   "h1Valor",
  //   "h2Desconto",
  // ];

  // const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={styles.divConteiner}>
      <div className={styles.divImg}>
        <img
          className={styles.img}
          src="https://agenciamagma.vtexassets.com/arquivos/AdilsonFernandoNevesOrnellas-ImgPix.png"
          alt="Imagem Pix"
        />
      </div>

      <div className={styles.divText}>
        <p className={styles.h1Valor}> R$ {pix} </p>
        <h2 className={styles.h2Desconto}> 10% de desconto </h2>
      </div>
    </div>
  );
};

export default pixCustom;
