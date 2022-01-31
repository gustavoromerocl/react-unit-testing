# react-unit-testing

## Tipos de pruebas frontend

Las pruebas en el frontend se clasifican de la siguiente forma: S

- Pruebas unitarias:  Realiza pruebas a cada unidad por separado
- Pruebas de integración: Esuna extensión lógica de pruebas unitarias, verifica funcionalidad y seguridad de los componentes integrados.
- Pruebas E2E: Comprueban el flujo de inicio a fin de un software asegurando que funcione de la manera esperada

## Test Runner

Los test runner son aquellos que nos ayudan a crear o implementar el ambiente de pruebas

- Jest
- Mocha
- Jasmine
- Ava

## Que es Jest

Es un framework de pruebas creado en javascript, sus principales características son:

- Zero config: No requiere configuración y react lo trae integrado.
- Snapshots: Son pruebas en base a una copia del arbol de tu componente.
- Isolated Tests: Las pruebas se generan de forma aislada de el ambiente de desarrollo y producción.
- API: Cuenta con una amplia comunidad y documentación.

sitio oficial: [https://jestjs.io/]

## Configurando Jest en React

- Crea una aplicación con el scaffold de react: npx create-react-app my-first-unit-test

- Ejecuta la configuración integrada y el ambiente de pruebas en el proyecto de react: npm run test

## Configuración personalidaza para jest

Los proyectos creados con react-app tienen integrada la configuración de jest por lo que solo es editable a través de la ejecución del script

## Jest Expect

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
- toBeInTheDocument