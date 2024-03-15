// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    struct Identity {
        string name;
        string phoneNumber;
        string home_address;
        string email;
        bool verified;
    }

    mapping(address => Identity) public userIdentity;

    event IdentityCreated(address indexed user, string name, string phoneNumber, string home_address, string email);
    event IdentityUpdated(address indexed user, string field, string newValue);
    event IdentityVerified(address indexed user);

    function setName(string memory _name) public {
        userIdentity[msg.sender].name = _name;
        emit IdentityUpdated(msg.sender, "name", _name);
    }

    function setPhoneNumber(string memory _phoneNumber) public {
        userIdentity[msg.sender].phoneNumber = _phoneNumber;
        emit IdentityUpdated(msg.sender, "phoneNumber", _phoneNumber);
    }

    function setAddress(string memory _home_address) public {
        userIdentity[msg.sender].home_address = _home_address;
        emit IdentityUpdated(msg.sender, "home_address", _home_address);
    }

    function setEmail(string memory _email) public {
        userIdentity[msg.sender].email = _email;
        emit IdentityUpdated(msg.sender, "email", _email);
    }

    function verifyIdentity() public {
        require(bytes(userIdentity[msg.sender].name).length > 0, "Name not set");
        require(bytes(userIdentity[msg.sender].phoneNumber).length > 0, "Phone number not set");
        require(bytes(userIdentity[msg.sender].home_address).length > 0, "Home address not set");
        require(bytes(userIdentity[msg.sender].email).length > 0, "Email not set");

        userIdentity[msg.sender].verified = true;
        emit IdentityVerified(msg.sender);
    }

    function updateName(string memory _name) public {
        require(bytes(userIdentity[msg.sender].name).length > 0, "Identity not found");
        require(bytes(_name).length > 0, "Name must not be empty");

        userIdentity[msg.sender].name = _name;
        emit IdentityUpdated(msg.sender, "name", _name);
    }

    function updatePhoneNumber(string memory _phoneNumber) public {
        require(bytes(userIdentity[msg.sender].name).length > 0, "Identity not found");

        userIdentity[msg.sender].phoneNumber = _phoneNumber;
        emit IdentityUpdated(msg.sender, "phoneNumber", _phoneNumber);
    }

    function updateAddress(string memory _home_address) public {
        require(bytes(userIdentity[msg.sender].name).length > 0, "Identity not found");

        userIdentity[msg.sender].home_address = _home_address;
        emit IdentityUpdated(msg.sender, "home_address", _home_address);
    }

    function updateEmail(string memory _email) public {
        require(bytes(userIdentity[msg.sender].name).length > 0, "Identity not found");

        userIdentity[msg.sender].email = _email;
        emit IdentityUpdated(msg.sender, "email", _email);
    }
}
