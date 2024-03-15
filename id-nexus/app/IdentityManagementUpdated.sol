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

    // Set user name
    function setName(string memory _name) public {
        userIdentity[msg.sender].name = _name;
        emit IdentityUpdated(msg.sender, "name", _name);
    }

    // Set phone number
    function setPhoneNumber(string memory _phoneNumber) public {
        userIdentity[msg.sender].phoneNumber = _phoneNumber;
        emit IdentityUpdated(msg.sender, "phoneNumber", _phoneNumber);
    }

    // Set home address
    function setAddress(string memory _address) public {
        userIdentity[msg.sender].home_address = _address;
        emit IdentityUpdated(msg.sender, "home_address", _address);
    }

    // Set email
    function setEmail(string memory _email) public {
        userIdentity[msg.sender].email = _email;
        emit IdentityUpdated(msg.sender, "email", _email);
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
        return (identity.name, identity.phoneNumber, identity.home_address, identity.email, identity.verified);
    }
}
