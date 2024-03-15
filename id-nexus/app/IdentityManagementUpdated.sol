// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentityManagement {
    struct Identity {
        string name;
        string phoneNumber;
        string address;
        string email;
        bool verified;
    }

    mapping(address => Identity) public userIdentity;

    event IdentityCreated(address indexed user, string name, string phoneNumber, string address, string email);
    event IdentityUpdated(address indexed user, string field, string newValue);
    event IdentityVerified(address indexed user);

    // Create or update user identity
    function setIdentity(string memory _name, string memory _phoneNumber, string memory _address, string memory _email) public {
        userIdentity[msg.sender] = Identity(_name, _phoneNumber, _address, _email, false);
        emit IdentityCreated(msg.sender, _name, _phoneNumber, _address, _email);
    }

    // Update a field in user identity
    function updateIdentityField(string memory _field, string memory _newValue) public {
        require(bytes(_newValue).length > 0, "New value must not be empty");
        require(bytes(userIdentity[msg.sender].name).length > 0, "User identity not found");
        if (keccak256(abi.encodePacked(_field)) == keccak256(abi.encodePacked("name"))) {
            userIdentity[msg.sender].name = _newValue;
        } else if (keccak256(abi.encodePacked(_field)) == keccak256(abi.encodePacked("phoneNumber"))) {
            userIdentity[msg.sender].phoneNumber = _newValue;
        } else if (keccak256(abi.encodePacked(_field)) == keccak256(abi.encodePacked("address"))) {
            userIdentity[msg.sender].address = _newValue;
        } else if (keccak256(abi.encodePacked(_field)) == keccak256(abi.encodePacked("email"))) {
            userIdentity[msg.sender].email = _newValue;
        } else {
            revert("Invalid field");
        }
        emit IdentityUpdated(msg.sender, _field, _newValue);
    }

    // Verify user identity
    function verifyIdentity() public {
        require(bytes(userIdentity[msg.sender].name).length > 0, "User identity not found");
        userIdentity[msg.sender].verified = true;
        emit IdentityVerified(msg.sender);
    }

    // Get user identity details
    function getIdentity(address _user) public view returns (string memory name, string memory phoneNumber, string memory _address, string memory email, bool verified) {
        Identity memory identity = userIdentity[_user];
        return (identity.name, identity.phoneNumber, identity.address, identity.email, identity.verified);
    }
}
