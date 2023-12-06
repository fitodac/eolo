---
sidebar_position: 1
---

# Comenzando

### Instalación

```bash
npm i eolo -D
```

Luego en el archivo de configuración de Tailwind `tailwind.config.js` deberás importar *eolo* y declaralo dentro de `plugins`

```javascript
import eolo from 'eolo'

export default {
	plugins: [eolo]
}
```

Finalmente deberás importar `eolo.css`.

```css
@import 'eolo';
```

<br/>
### Sobre Eolo

Eolo era el dios griego del viento y era responsable de controlar y regular los vientos, y se le atribuía el poder de liberar o contener los vientos según su voluntad.

Muy lejos de ese poder, **Eolo** es una librería sin más pretenciones que las de proveer un conjunto de componentes HTML/CSS listos para usar y creados con TailwindCSS.

Está pensado para la web y para ser implementado en cualquier lenguaje de programación que utilice HTML para su renderizado, por lo que se ha procurado usar la menor cantidad de JavaScript para cualquier funcionalidad de interacción de usuario. A menos que se indique lo contrario, no se necesitará JavaScript para desplegar, ocultar o interactuar con los componentes en ninguna forma.

<br/>
### Características

**Mínimo CSS**<br/>
Entendiendo que cada proyecto tiene un diseño particular, se pretende dar libertad de uso de los componentes incluyendo el mínimo necesario de css para lograr un componente que tenga sentido. Ya que Tailwind cuenta con clases con las que ya estás familiarizado, verás que muchos de los componentes usan esas clases en conjunto con las clases de **Eolo**.

**Interacciones HTML/CSS**<br/>
**Eolo** surge con la necesidad de tener un paquete de componentes que puedan ser usados con cualquier lenguaje, en mi caso fue PHP y JavaScript. Es por eso que intenta implementar interacciones como tabs, dropdown o accordion usando solamente html y css.<br/>
No obstante, con un poco de ingenio podrás implementar JavaScript si lo crees necesario.