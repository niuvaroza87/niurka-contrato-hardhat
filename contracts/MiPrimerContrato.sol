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