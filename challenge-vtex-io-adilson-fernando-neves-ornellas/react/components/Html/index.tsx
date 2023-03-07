import React, { ReactNode } from "react";
import { useCssHandles } from "vtex.css-handles";

import "./styles.css";

const CSS_HANDLES = ["html"] as const;

type HtmlProps = {
    children?: ReactNode,
    /**
     * Qual tag Html que deseja que seja usar
     *
     * @default div
     */
    tag?: keyof React.ReactHTML
    /**
     * Classes CSS extras que deseja adicionar.
     * Feito para uso de [classes do tachyons](https://tachyons.io/)
     */
    tachyonsClasses?: string
    /**
     * Se caso quiser usar esse componente
     * para adicinar um texto simples
     */
    text?: string
    /**
       * Tag ID para
       */
    testId?: string
}

export const Html = ({ children = null, tag = "div", text = "", tachyonsClasses: classes = "", testId }: HtmlProps) => {
    const { handles } = useCssHandles(CSS_HANDLES);

    const props = {
      className: `${handles.html} ${classes}`,
      "data-testid": testId
    };
    const Children = <>{children}{text}</>;
    const Element = React.createElement(tag, props, Children);

    return <>{Element}</>;
};
