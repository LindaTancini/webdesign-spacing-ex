// metadati per la storia
import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

// variabile metadati per la storia
const meta: Meta = {
  title: "Spacing",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

// definizione del tipo di storia
type Story = StoryObj;
// Componente che legge e mostra il valore della variabile CSS passata come prop
const SpaceCalc = ({ value }: { value: string }) => {
  // uso useMemo per calcolare il valore della variabile CSS solo quando cambia
  // questo migliora le performance evitando ricalcoli inutili
  const spacing = React.useMemo(() => {
    //ottengo gli stili calcolati per la variabile CSS
    // uso document.documentElement per accedere al root element del documento
    // e window.getComputedStyle per ottenere gli stili calcolati
    const bodyStyle = window.getComputedStyle(document.documentElement);
    // ritorno il valore della variabile CSS
    return bodyStyle.getPropertyValue(value);
  }, [value]);
  //visualizzo valore testuale della variabile CSS
  return <div>{spacing}</div>;
};
// definizione della storia con un array di variabili CSS dove usare il componente SpaceCalc
export const Spacing: Story = {
  render: () => (
    // renderizzo un elemento <dl> con le definizioni di spazio
    <>
      <dl>
        {["xs", "sm", "md", "lg", "xl"].map((size) => (
          <React.Fragment key={size}>
            <dt>{size}</dt>
            {/* per ogni variabile CSS creo un elemento <dd> con lo stile che usa la variabile */}
            {/* uso la variabile CSS come valore della proprietà --story-spacing */}
            <dd style={{ "--story-spacing": `var(--spacing-${size})` }}>
              <span>
                <SpaceCalc value={`--spacing-${size}`} />
              </span>

              {/* span con classname info per mostrare il valore della variabile CSS */}
              <span className="info" />
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </>
  ),
};
