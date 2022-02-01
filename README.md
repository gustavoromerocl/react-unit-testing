# react-unit-testing

## Conociendo y configurando Jest

### Tipos de pruebas frontend

Las pruebas en el frontend se clasifican de la siguiente forma: S

- Pruebas unitarias:  Realiza pruebas a cada unidad por separado
- Pruebas de integración: Esuna extensión lógica de pruebas unitarias, verifica funcionalidad y seguridad de los componentes integrados.
- Pruebas E2E: Comprueban el flujo de inicio a fin de un software asegurando que funcione de la manera esperada

### Test Runner

Los test runner son aquellos que nos ayudan a crear o implementar el ambiente de pruebas

- Jest
- Mocha
- Jasmine
- Ava

### Que es Jest

Es un framework de pruebas creado en javascript, sus principales características son:

- Zero config: No requiere configuración y react lo trae integrado.
- Snapshots: Son pruebas en base a una copia del arbol de tu componente.
- Isolated Tests: Las pruebas se generan de forma aislada de el ambiente de desarrollo y producción.
- API: Cuenta con una amplia comunidad y documentación.

sitio oficial: [https://jestjs.io/]

### Configurando Jest en React

- Crea una aplicación con el scaffold de react: npx create-react-app my-first-unit-test

- Ejecuta la configuración integrada y el ambiente de pruebas en el proyecto de react: npm run test

### Configuración personalidaza para jest

Los proyectos creados con react-app tienen integrada la configuración de jest por lo que solo es editable a través de la ejecución del script

### Jest Expect

Expect como su traducción lo indica se refiere a lo esperado o que lo que se espera del resultado, entonces recibe un argumento y ejecuta un matcher para validar.

tuFuncion(){
  return 5;
}

expect(tuFuncion()).toEquals(5);

Matchers más usados

- toBeDefined()
- toBeUndefined()
- toEqual(valor)
- toBe(valor)
- toBeinstanceOf(valor)
- toBeTruthy()
- toBeGreatherThan(valor)
- toHaveLength(valor)
- toBeInTheDocument()

### Alcance de tus pruebas con Jest Coverage

Para activarlo es necesario pasar la configuración a través del script ya que en nuestro caso que usamos react-create-app, su función es mostrar una tabla resumen de las pruebas realizadas
- --collectCoverage=true

File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.725 s

## Mi primer prueba unitaria

### Explicación de la estructura de una prueba unitaria

Para poder realizar esta sección del curso fue necesario instalar la siguiente dependencia 

- npm install -d react-test-renderer

Para ejecutar las pruebas agrupadas utilizamos las función describe, que puedes revisar en detalle en el dashboard de la documentación.

### React Test Renderer [https://es.reactjs.org/docs/test-renderer.html]

Este paquete proporciona un procesador de React que se puede usar para procesar componentes de React a objetos JavaScript puros, sin depender del DOM o de un entorno móvil nativo.
Básicamente, este paquete facilita tomar una instantánea de la jerarquía de la vista de la plataforma (similar a un árbol DOM) representada por un componente React DOM o React Native sin usar un navegador o jsdom.



