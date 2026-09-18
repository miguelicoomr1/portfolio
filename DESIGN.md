---
name: Portfolio MiguelicooMR1
description: Portfolio oscuro y cinematográfico donde cada proyecto web se proyecta como una pantalla iluminada.
colors:
  accent-brass: "#e0a63a"
  accent-brass-hover: "#f0b94f"
  ground-black: "#0d0c0b"
  ground-raised: "#161412"
  line-soot: "#2b2723"
  text-bone: "#efeae2"
  text-muted-ash: "#a8a094"
typography:
  display:
    fontFamily: "Big Shoulders Display, Impact, Arial Narrow, sans-serif"
    fontSize: "clamp(3.4rem, 15vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Big Shoulders Display, Impact, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 3vw, 1.9rem)"
    fontWeight: 500
    lineHeight: 1.25
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  frame: "6px"
  chip: "999px"
  button: "999px"
spacing:
  gutter: "24px"
  project-y: "72px"
  section-top: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent-brass}"
    textColor: "{colors.ground-black}"
    rounded: "{rounded.button}"
    padding: "16px 26px"
  button-primary-hover:
    backgroundColor: "{colors.accent-brass-hover}"
  chip:
    backgroundColor: "{colors.ground-black}"
    textColor: "{colors.text-bone}"
    rounded: "{rounded.chip}"
    padding: "4px 14px"
  screen-frame:
    backgroundColor: "{colors.ground-raised}"
    rounded: "{rounded.frame}"
---

# Design System: Portfolio MiguelicooMR1

## Overview

**Creative North Star: "The Projection Booth"**

Sala oscura donde cada web se proyecta como una pantalla iluminada. El ambiente es casi negro con un único acento latón; el trabajo del autor es lo más luminoso de la página. Condensado y alto en los titulares, sereno y legible en el cuerpo. El grano de película sutil da textura sin brillo.

La densidad es baja: mucho aire entre proyectos, uno por escena. Los componentes son seguros y precisos: botones píldora, filas con línea fina, movimiento suave con ease-out exponencial.

**Key Characteristics:**
- Fondo casi negro cálido, texto hueso, un solo acento ámbar.
- Titulares condensados en mayúsculas; cuerpo en grotesca limpia.
- Vistas previas grandes como protagonistas, alternando lado.
- Grano de película fijo, muy tenue.
- Un momento animado: la revelación de la pantalla al hacer scroll.

## Colors

Negro cálido, hueso y latón. El acento ocupa poco espacio y señala acciones y énfasis.

### Primary
- **Latón de Proyector** (#e0a63a): botón principal, palabra de énfasis en titulares, enlaces de proyecto, hover de filas de contacto.
- **Latón Encendido** (#f0b94f): hover del botón principal.

### Neutral
- **Negro de Sala** (#0d0c0b): fondo de página y texto sobre el acento.
- **Negro Elevado** (#161412): fondo de la sección de contacto, marcos y logos.
- **Hollín** (#2b2723): líneas divisorias y bordes de marcos y chips.
- **Hueso** (#efeae2): texto principal.
- **Ceniza** (#a8a094): texto secundario, descripciones, etiquetas.

### Named Rules
**The One Brass Rule.** El latón es el único color de acento. Nunca se añade un segundo.

## Typography

**Display Font:** Big Shoulders Display (con Impact, Arial Narrow)
**Body Font:** Hanken Grotesk (con system-ui)

**Character:** condensado de cartel de cine frente a grotesca neutra. El contraste de proporciones da jerarquía sin más colores.

### Hierarchy
- **Display** (900, clamp(3.4rem, 15vw, 6rem), 0.9): nombre en el hero y titular de contacto, siempre en mayúsculas.
- **Headline** (800, clamp(2rem, 4.5vw, 3rem), 1): "Proyectos" y nombre de cada proyecto.
- **Title** (500, clamp(1.4rem, 3vw, 1.9rem), 1.25): frase del hero.
- **Body** (400, 1.0625rem, 1.6): descripciones, máximo 46ch.
- **Label** (400, 0.85rem): etiquetas de contacto, chips.

### Named Rules
**The Cap Ceiling Rule.** Ningún titular supera 6rem.

## Layout

Contenedor de 1240px con gutter lateral de 24px. Cada proyecto es una escena de dos columnas 7fr/5fr en escritorio (vista previa y texto), alternando el lado; en móvil se apilan. Ritmo vertical: 72px entre escenas, 96px sobre la sección de título. El hero ocupa el alto completo de la pantalla con el contenido anclado abajo.

## Elevation & Depth

Profundidad tonal más una sombra ancha solo bajo las pantallas de proyecto (`box-shadow: 0 30px 60px -20px rgba(0,0,0,.7)`). El resto es plano, separado por líneas de hollín.

## Shapes

Marcos de pantalla con esquina de 6px y borde de 1px. Botones y chips en píldora completa. Logos de proyecto en cuadrado de 8px de radio.

## Components

### Buttons
- **Shape:** píldora (999px)
- **Primary:** fondo latón, texto negro de sala, padding 16px 26px, flecha inline.
- **Hover / Focus:** sube 3px y aclara a latón encendido; foco con anillo de 2px en latón.

### Chips
- **Style:** contorno hollín de 1px, texto hueso, sin relleno, padding 4px 14px.

### Screen Frame
- **Corner Style:** 6px, borde hollín, sombra ancha inferior.
- **Behavior:** la imagen hace zoom lento (1.04) al pasar el ratón; aparece la etiqueta "Visitar web ↗" abajo a la derecha.

### Contact Rows
- **Style:** fila de línea fina con icono, etiqueta ceniza, valor grande y flecha diagonal.
- **Hover:** el contenido se desplaza 16px a la derecha y toma el color latón.

### Navigation
Barra superior mínima: marca en condensado a la izquierda, enlace "Contacto" en ceniza a la derecha.

## Do's and Don'ts

### Do:
- **Do** dejar que las vistas previas de los proyectos sean lo más grande y luminoso de la escena.
- **Do** usar el latón (#e0a63a) solo para acciones y una palabra de énfasis.
- **Do** mantener los titulares en condensado y mayúsculas, ≤6rem.
- **Do** animar una sola cosa: la revelación de la pantalla; respetar `prefers-reduced-motion`.

### Don't:
- **Don't** presentar los proyectos como una cuadrícula de tarjetas iguales; cada uno es una escena.
- **Don't** añadir brillos, halos ni segundos colores de acento.
- **Don't** usar texto degradado ni bordes laterales de color en bloques.
