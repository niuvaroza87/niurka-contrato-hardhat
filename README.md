# Mi Primer Contrato Inteligente - Hardhat + Sepolia

Proyecto de práctica para despliegue de smart contracts usando Hardhat en la red de pruebas Sepolia.

## 📋 Descripción

Este es un contrato inteligente simple que permite almacenar y modificar un nombre. Desarrollado como ejercicio práctico del curso de desarrollo Web3 en UPTA (Universidad Politécnica Territorial del Estado Aragua).

## 🚀 Tecnologías Utilizadas

- **Solidity** ^0.8.19
- **Hardhat** - Framework de desarrollo
- **Ethers.js** v6.9.0 - Librería para interactuar con Ethereum
- **Alchemy** - Proveedor RPC
- **Rabby Wallet** - Wallet para gestión de criptoactivos
- **Sepolia Testnet** - Red de pruebas de Ethereum

## 📍 Contrato Desplegado

**Dirección del Contrato en Sepolia:**
```
0xe191da50BF3ad3bb79a7050D618bF5c0b3Fc3F05
```

**Verificar en Etherscan:**

[Ver contrato en Sepolia Etherscan](https://sepolia.etherscan.io/address/0xe191da50BF3ad3bb79a7050D618bF5c0b3Fc3F05)

**Fecha de despliegue:** 10 de diciembre de 2025

## 📦 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (v16 o superior)
- npm o yarn
- Una wallet Web3 (Rabby Wallet, MetaMask, etc.)
- ETH de prueba en Sepolia

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/niuvaroza87/niurka-contrato-hardhat.git
cd niurka-contrato-hardhat
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:

Crear archivo `.env` en la raíz del proyecto:
```env
SEPOLIA_RPC_URL=tu_url_rpc_de_sepolia
PRIVATE_KEY=tu_clave_privada_sin_0x
```

## 📝 Estructura del Proyecto
```
niurka-contrato-hardhat/
├── contracts/
│   └── MiPrimerContrato.sol    # Contrato inteligente principal
├── scripts/
│   └── deploy.js                # Script de despliegue
├── hardhat.config.js            # Configuración de Hardhat
├── .env                         # Variables de entorno (no incluido en Git)
├── .gitignore
├── package.json
└── README.md
```

## 🎯 Uso

### Compilar el contrato
```bash
npx hardhat compile
```

### Desplegar en Sepolia
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## 📜 Código del Contrato

El contrato `MiPrimerContrato.sol` contiene:
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MiPrimerContrato {
    string public nombre;

    constructor() {
        nombre = "Niurka";
    }

    function cambiarNombre(string memory _nuevoNombre) public {
        nombre = _nuevoNombre;
    }
}
```

## 🔧 Funciones del Contrato

### `nombre()`
- **Tipo:** Variable pública (getter automático)
- **Descripción:** Retorna el nombre almacenado en el contrato
- **Retorno:** `string` - El nombre actual
- **Ejemplo de uso:** 
```javascript
  const nombreActual = await contrato.nombre();
  console.log(nombreActual); // "Niurka"
```

### `cambiarNombre(string _nuevoNombre)`
- **Tipo:** Función pública
- **Descripción:** Permite cambiar el nombre almacenado en el contrato
- **Parámetros:** 
  - `_nuevoNombre` (string): Nuevo nombre a almacenar
- **Retorno:** Ninguno (función de tipo `void`)
- **Gas requerido:** Variable (dependiendo de la longitud del string)
- **Ejemplo de uso:**
```javascript
  const tx = await contrato.cambiarNombre("NuevoNombre");
  await tx.wait();
```

## 🔍 Verificación del Contrato

Para verificar las transacciones y el estado del contrato:

1. Visita [Sepolia Etherscan](https://sepolia.etherscan.io)
2. Busca la dirección del contrato: `0xe191da50BF3ad3bb79a7050D618bF5c0b3Fc3F05`
3. Explora:
   - Transacciones del contrato
   - Balance y estado
   - Código fuente (si está verificado)
   - Eventos emitidos

## 🛡️ Seguridad

⚠️ **IMPORTANTE - Medidas de seguridad:**

- ✅ Nunca compartas tu clave privada
- ✅ El archivo `.env` está incluido en `.gitignore` y NO se sube a GitHub
- ✅ Este proyecto es solo para fines educativos en testnet (Sepolia)
- ✅ No uses estas claves en mainnet (red principal de Ethereum)
- ✅ Los fondos utilizados son ETH de prueba sin valor real

## 📚 Aprendizajes

Durante el desarrollo de este proyecto aprendí:

- Configuración de un entorno de desarrollo Web3
- Escritura de smart contracts en Solidity
- Uso de Hardhat como framework de desarrollo
- Gestión de wallets y claves privadas
- Interacción con redes de prueba (testnet)
- Despliegue de contratos en blockchain
- Verificación de contratos en exploradores de bloques
- Gestión de variables de entorno para seguridad
- Uso de Git y GitHub para control de versiones

## 🐛 Resolución de Problemas

### Error: "insufficient funds"
- **Solución:** Verifica que tu wallet tenga ETH de prueba en Sepolia
- **Obtener ETH:** Usa faucets como [Google Cloud Sepolia Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)

### Error: "Invalid JSON-RPC response"
- **Solución:** Verifica que tu RPC URL sea correcta
- **Alternativa:** Usa RPCs públicas como `https://ethereum-sepolia-rpc.publicnode.com`

### Error: "Nothing to compile"
- **Solución:** Verifica que el archivo `.sol` exista en la carpeta `contracts/`
- **Comando:** `npx hardhat clean` seguido de `npx hardhat compile`

## 👨‍💻 Autora

**Niurka Oropeza**
- 🎓 Estudiante de Maestría en Informática - UPTA
- 🔬 Enfoque: Desarrollo de Software basado en IA
- 💼 Ingeniera en Informática
- 🌐 GitHub: [@niuvaroza87](https://github.com/niuvaroza87)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

---

**Desarrollado con 💙 para el aprendizaje de Web3**

*Este proyecto forma parte de las actividades académicas de la Maestría en Informática con enfoque en Desarrollo de Software basado en IA - UPTA, Aragua, Venezuela.*