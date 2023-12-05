---
sidebar_position: 1
---

# Iniciando

**TailwindUI** es una librería de componentes HTML/CSS básicos para construir componentes de usabilidad de interfases.

**TailwindUI** está pensado para la web y para ser implementado en cualquier lenguaje de programación que utilice HTML para su renderizado, por lo que se ha procurado usar la menor cantidad de JavaScript para cualquier funcionalidad de interacción de usuario, por lo que, a menos que se indique lo contrario, no se necesitará JavaScript para desplegar, ocultar o interactuar en ninguna forma.

La filosofía es [HTML first](https://html-first.com/).

## ¿Cómo lo uso?

Copia el directorio `/ui` a tu proyecto y luego lo importas en el archivo de configuración de **Tailwind CSS**.

Más abajo, en el nodo `plugins` deberás agregar el nombre del paquete: `twUiKit`.

```javascript
import twUiKit from './src/ui'

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [twUiKit],
}
```
