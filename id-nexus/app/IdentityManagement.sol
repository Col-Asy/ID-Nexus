// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract IdentityManagement {
    struct Credential {
        string name;
        string value;
        bool verified;
    }

    mapping(address => Credential[]) public userCredentials;

    event CredentialAdded(address indexed user, string name, string value);
    event CredentialUpdated(address indexed user, string name, string newValue);
    event CredentialVerified(address indexed user, string name);

    // Add a new credential
    function addCredential(string memory _name, string memory _value) public {
        userCredentials[msg.sender].push(Credential(_name, _value, false));
        emit CredentialAdded(msg.sender, _name, _value);
    }

    // Update an existing credential
    function updateCredential(uint _index, string memory _newValue) public {
        require(_index < userCredentials[msg.sender].length, "Invalid index");
        userCredentials[msg.sender][_index].value = _newValue;
        emit CredentialUpdated(msg.sender, userCredentials[msg.sender][_index].name, _newValue);
    }

    // Verify a credential
    function verifyCredential(uint _index) public {
        require(_index < userCredentials[msg.sender].length, "Invalid index");
        userCredentials[msg.sender][_index].verified = true;
        emit CredentialVerified(msg.sender, userCredentials[msg.sender][_index].name);
    }

    // Get the number of credentials for a user
    function getNumCredentials(address _user) public view returns (uint) {
        return userCredentials[_user].length;
    }

    // get a credential by index for a user
    function getCredential(address _user, uint _index) public view returns (string memory name, string memory value, bool verified) {
        require(_index < userCredentials[_user].length, "Invalid index");
        Credential memory credential = userCredentials[_user][_index];
        return (credential.name, credential.value, credential.verified);
    }
}