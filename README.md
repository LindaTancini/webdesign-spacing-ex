# Esercizio: Visualizza dimensioni di spaziatura CSS

## Obiettivo

Creare un componente React che mostri, per ogni taglia (`xs`, `sm`, `md`, `lg`, `xl`):

- Il valore della variabile CSS di spaziatura (es. `--spacing-sm`)
- Un blocco grafico largo quanto quel valore

---

## Passo 1: Definisci le variabili CSS

Nel CSS globale (o in `:root`), definisci le variabili:

- `--spacing-xs`, `--spacing-sm`, ..., valori in px o rem

---

## Passo 2: Crea un componente React per leggere il valore di una variabile CSS

- Il componente riceve come prop il nome della variabile CSS (stringa)
- Usa `window.getComputedStyle(document.body).getPropertyValue(variableName)` per leggerne il valore
- Ritorna o mostra quel valore come testo

---

## Passo 3: Crea gli stili CSS

- Stili per la lista (`dl`, `dt`, `dd`)
- Stili per i blocchi grafici:
  - Un blocco verde per la spaziatura, con larghezza dinamica

---

## Passo 4: Crea il componente principale che:

- Ha un array di taglie: `["xs", "sm", "md", "lg", "xl"]`
- Fa `.map` sull’array e per ogni taglia crea:
  - Un elemento `<dt>` con la label della taglia
  - Un elemento `<dd>` con:
    - Il valore spaziatura (usando il componente di cui al passo 2)
    - Il blocco verde largo quanto la spaziatura (usa style inline con `width: var(--spacing-KEY)`)

---

## Passo 5 (opzionale): Usa React.useMemo

- Per evitare di ricalcolare il valore CSS a ogni render, usa `React.useMemo` con la variabile CSS come dipendenza

---

## Bonus

- Centra la lista nella pagina (se usi Storybook)
- Aggiungi colori o bordi ai blocchi per migliorarne la visibilità
- Usa monospace font per i valori numerici

---
